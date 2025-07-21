// OSOM PWA Service Worker
// Advanced caching with business-optimized strategy

const CACHE_NAME = 'osom-v1.0.0'
const OFFLINE_URL = '/offline'

// Resources to cache immediately on install
const STATIC_CACHE_ASSETS = [
  '/',
  '/offline',
  '/outils',
  '/services',
  '/realisations',
  '/contact',
  '/manifest.json',
  '/osom-logo.svg',
  // Critical CSS and JS will be added by Next.js build
]

// Business-critical pages that must work offline
const CRITICAL_PAGES = [
  '/',
  '/outils',
  '/services/programmation-ia',
  '/services/creation-site-web',
  '/contact'
]

// API endpoints to cache
const API_CACHE_PATTERNS = [
  '/api/calculator',
  '/_next/static/'
]

// Install event - cache critical resources
self.addEventListener('install', event => {
  console.log('🚀 OSOM Service Worker installing...')
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('📦 Caching critical assets')
        return cache.addAll(STATIC_CACHE_ASSETS)
      })
      .then(() => {
        console.log('✅ OSOM SW installed successfully')
        return self.skipWaiting()
      })
      .catch(error => {
        console.error('❌ SW installation failed:', error)
      })
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('🔄 OSOM Service Worker activating...')
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(cacheName => cacheName !== CACHE_NAME)
            .map(cacheName => {
              console.log('🗑️ Deleting old cache:', cacheName)
              return caches.delete(cacheName)
            })
        )
      })
      .then(() => {
        console.log('✅ OSOM SW activated')
        return self.clients.claim()
      })
  )
})

// Fetch event - advanced caching strategy
self.addEventListener('fetch', event => {
  const { request } = event
  const url = new URL(request.url)
  
  // Skip non-HTTP requests
  if (!request.url.startsWith('http')) return
  
  // Skip cross-origin requests (unless it's our API)
  if (url.origin !== location.origin) {
    return
  }

  event.respondWith(handleFetch(request))
})

async function handleFetch(request) {
  const url = new URL(request.url)
  const pathname = url.pathname

  try {
    // Strategy 1: Network first for API calls and dynamic content
    if (isAPIRequest(pathname) || isDynamicContent(pathname)) {
      return await networkFirst(request)
    }
    
    // Strategy 2: Cache first for static assets
    if (isStaticAsset(pathname)) {
      return await cacheFirst(request)
    }
    
    // Strategy 3: Stale while revalidate for pages
    if (isPageRequest(request)) {
      return await staleWhileRevalidate(request)
    }
    
    // Default: network first with offline fallback
    return await networkFirstWithOffline(request)
    
  } catch (error) {
    console.error('❌ Fetch failed:', error)
    return await getOfflineFallback(request)
  }
}

// Check if request is for API
function isAPIRequest(pathname) {
  return API_CACHE_PATTERNS.some(pattern => pathname.includes(pattern))
}

// Check if request is for static assets
function isStaticAsset(pathname) {
  return pathname.includes('/_next/static/') || 
         pathname.endsWith('.js') || 
         pathname.endsWith('.css') ||
         pathname.endsWith('.png') ||
         pathname.endsWith('.jpg') ||
         pathname.endsWith('.svg') ||
         pathname.endsWith('.woff2')
}

// Check if request is for dynamic content
function isDynamicContent(pathname) {
  return pathname.includes('/api/') || 
         pathname.includes('?') ||
         pathname.includes('#')
}

// Check if request is for a page
function isPageRequest(request) {
  return request.method === 'GET' && 
         request.headers.get('accept')?.includes('text/html')
}

// Network first strategy (for API calls)
async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME)
  
  try {
    const networkResponse = await fetch(request)
    
    // Cache successful responses
    if (networkResponse.status === 200) {
      cache.put(request, networkResponse.clone())
    }
    
    return networkResponse
  } catch (error) {
    console.log('📱 Network failed, trying cache:', request.url)
    return await cache.match(request) || Response.error()
  }
}

// Cache first strategy (for static assets)
async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME)
  const cachedResponse = await cache.match(request)
  
  if (cachedResponse) {
    // Update cache in background
    fetch(request)
      .then(response => {
        if (response.status === 200) {
          cache.put(request, response.clone())
        }
      })
      .catch(() => {}) // Ignore errors for background updates
    
    return cachedResponse
  }
  
  // Not in cache, fetch and cache
  try {
    const networkResponse = await fetch(request)
    
    if (networkResponse.status === 200) {
      cache.put(request, networkResponse.clone())
    }
    
    return networkResponse
  } catch (error) {
    return Response.error()
  }
}

// Stale while revalidate (for pages)
async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME)
  const cachedResponse = await cache.match(request)
  
  // Always try to update in background
  const networkPromise = fetch(request)
    .then(response => {
      if (response.status === 200) {
        cache.put(request, response.clone())
      }
      return response
    })
    .catch(() => null)
  
  // Return cached version immediately if available
  if (cachedResponse) {
    return cachedResponse
  }
  
  // Otherwise wait for network
  return await networkPromise || getOfflineFallback(request)
}

// Network first with offline fallback
async function networkFirstWithOffline(request) {
  try {
    const networkResponse = await fetch(request)
    
    // Cache successful responses
    if (networkResponse.status === 200) {
      const cache = await caches.open(CACHE_NAME)
      cache.put(request, networkResponse.clone())
    }
    
    return networkResponse
  } catch (error) {
    // Try cache first
    const cache = await caches.open(CACHE_NAME)
    const cachedResponse = await cache.match(request)
    
    if (cachedResponse) {
      return cachedResponse
    }
    
    // Return offline page for navigation requests
    return await getOfflineFallback(request)
  }
}

// Get offline fallback
async function getOfflineFallback(request) {
  if (isPageRequest(request)) {
    const cache = await caches.open(CACHE_NAME)
    return await cache.match(OFFLINE_URL) || 
           new Response('Offline - Please check your connection', {
             status: 503,
             statusText: 'Service Unavailable'
           })
  }
  
  return Response.error()
}

// Background sync for form submissions
self.addEventListener('sync', event => {
  if (event.tag === 'contact-form-sync') {
    event.waitUntil(syncContactForms())
  }
})

async function syncContactForms() {
  console.log('🔄 Syncing offline form submissions...')
  
  // This would handle offline form submissions
  // Implementation depends on IndexedDB storage
  const db = await openIndexedDB()
  const forms = await getUnsentForms(db)
  
  for (const form of forms) {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form.data)
      })
      
      if (response.ok) {
        await removeFormFromDB(db, form.id)
        console.log('✅ Form synced:', form.id)
      }
    } catch (error) {
      console.log('❌ Form sync failed:', form.id)
    }
  }
}

// IndexedDB helpers (simplified)
async function openIndexedDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('osom-offline-db', 1)
    
    request.onerror = () => reject(request.error)
    request.onsuccess = () => resolve(request.result)
    
    request.onupgradeneeded = (event) => {
      const db = event.target.result
      if (!db.objectStoreNames.contains('forms')) {
        db.createObjectStore('forms', { keyPath: 'id' })
      }
    }
  })
}

async function getUnsentForms(db) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['forms'], 'readonly')
    const store = transaction.objectStore('forms')
    const request = store.getAll()
    
    request.onerror = () => reject(request.error)
    request.onsuccess = () => resolve(request.result)
  })
}

async function removeFormFromDB(db, formId) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['forms'], 'readwrite')
    const store = transaction.objectStore('forms')
    const request = store.delete(formId)
    
    request.onerror = () => reject(request.error)
    request.onsuccess = () => resolve()
  })
}

// Push notification handling
self.addEventListener('push', event => {
  if (!event.data) return
  
  const data = event.data.json()
  
  const options = {
    body: data.body || 'Nouvelle notification OSOM',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    data: data,
    actions: [
      {
        action: 'view',
        title: 'Voir',
        icon: '/icons/icon-72x72.png'
      },
      {
        action: 'dismiss',
        title: 'Ignorer'
      }
    ]
  }
  
  event.waitUntil(
    self.registration.showNotification(data.title || 'OSOM', options)
  )
})

// Notification click handling
self.addEventListener('notificationclick', event => {
  event.notification.close()
  
  if (event.action === 'view' || !event.action) {
    const url = event.notification.data?.url || '/'
    
    event.waitUntil(
      self.clients.matchAll().then(clients => {
        // Try to focus existing tab
        const client = clients.find(c => c.url === url && 'focus' in c)
        
        if (client) {
          return client.focus()
        }
        
        // Open new tab
        return self.clients.openWindow(url)
      })
    )
  }
})

console.log('🚀 OSOM Service Worker loaded successfully')