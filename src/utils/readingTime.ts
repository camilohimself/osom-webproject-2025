/**
 * Calculate estimated reading time for text content
 * @param text - The text content to analyze
 * @param wordsPerMinute - Average reading speed (default: 200 WPM for technical content)
 * @returns Reading time in minutes
 */
export function calculateReadingTime(text: string, wordsPerMinute: number = 200): number {
  // Remove HTML tags and extra whitespace
  const cleanText = text.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
  
  // Count words
  const wordCount = cleanText.split(' ').filter(word => word.length > 0).length
  
  // Calculate reading time in minutes
  const readingTime = Math.ceil(wordCount / wordsPerMinute)
  
  // Minimum 1 minute reading time
  return Math.max(1, readingTime)
}

/**
 * Format reading time for display
 * @param minutes - Reading time in minutes
 * @returns Formatted string like "5 min read"
 */
export function formatReadingTime(minutes: number): string {
  if (minutes === 1) {
    return '1 min read'
  }
  return `${minutes} min read`
}

/**
 * Calculate reading progress based on scroll position
 * @param scrollY - Current scroll position
 * @param articleHeight - Total height of the article content
 * @param viewportHeight - Height of the viewport
 * @returns Progress percentage (0-100)
 */
export function calculateReadingProgress(
  scrollY: number, 
  articleHeight: number, 
  viewportHeight: number
): number {
  // Start progress when article comes into view
  const startOffset = 200
  const adjustedScroll = Math.max(0, scrollY - startOffset)
  const readableHeight = Math.max(0, articleHeight - viewportHeight)
  
  if (readableHeight === 0) return 100
  
  const progress = (adjustedScroll / readableHeight) * 100
  return Math.min(100, Math.max(0, progress))
}