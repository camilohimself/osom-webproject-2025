// Script Chart.js Premium Design Complet
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎨 Initialisation des graphiques premium...');
    
    // Configuration globale Chart.js Premium
    Chart.defaults.font.size = 13;
    Chart.defaults.font.family = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";
    Chart.defaults.font.weight = '500';
    Chart.defaults.animation.duration = 2000;
    Chart.defaults.animation.easing = 'easeOutQuart';
    Chart.defaults.elements.point.radius = 0;
    Chart.defaults.elements.point.hoverRadius = 8;
    Chart.defaults.elements.line.borderWidth = 3;
    Chart.defaults.elements.bar.borderRadius = 8;
    Chart.defaults.elements.bar.borderSkipped = false;
    
    // Helper pour créer des gradients magnifiques
    function createGradient(ctx, color1, color2, direction = 'vertical') {
        const gradient = direction === 'vertical' ? 
            ctx.createLinearGradient(0, 0, 0, 400) : 
            ctx.createLinearGradient(0, 0, 400, 0);
        gradient.addColorStop(0, color1);
        gradient.addColorStop(1, color2);
        return gradient;
    }

    // Configuration premium globale
    const premiumConfig = {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            intersect: false,
            mode: 'index'
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.95)',
                titleColor: '#FFFFFF',
                bodyColor: '#FFFFFF',
                borderColor: '#8b5cf6',
                borderWidth: 2,
                cornerRadius: 16,
                padding: 20,
                titleFont: { size: 14, weight: '600' },
                bodyFont: { size: 13, weight: '500' },
                displayColors: true,
                boxPadding: 10,
                caretSize: 8,
                shadowOffsetX: 0,
                shadowOffsetY: 8,
                shadowBlur: 24
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                border: {
                    display: false
                },
                ticks: {
                    color: '#6B7280',
                    font: { size: 12, weight: '600' },
                    padding: 16
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(156, 163, 175, 0.08)',
                    lineWidth: 1
                },
                border: {
                    display: false
                },
                ticks: {
                    color: '#6B7280',
                    font: { size: 12, weight: '500' },
                    padding: 16
                }
            }
        }
    };

    // 1. Graphique Conversion - Premium Design
    const conversionCanvas = document.getElementById('conversionChart');
    if (conversionCanvas) {
        const ctx = conversionCanvas.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['🏆 OSOM', '💸 Paid Search', '🔗 Direct', '🌱 Organic'],
                datasets: [{
                    label: 'Taux de Conversion',
                    data: [11.3, 1.0, 5.9, 4.6],
                    backgroundColor: [
                        createGradient(ctx, '#FFDD00', '#FFB800'),
                        createGradient(ctx, '#DC2626', '#B91C1C'),
                        createGradient(ctx, '#8b5cf6', '#7c3aed'),
                        createGradient(ctx, '#10b981', '#059669')
                    ],
                    borderColor: ['#FFDD00', '#DC2626', '#8b5cf6', '#10b981'],
                    borderWidth: 3,
                    borderRadius: 16,
                    borderSkipped: false
                }]
            },
            options: {
                ...premiumConfig,
                scales: {
                    ...premiumConfig.scales,
                    y: { 
                        ...premiumConfig.scales.y,
                        max: 12,
                        ticks: {
                            ...premiumConfig.scales.y.ticks,
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                },
                plugins: {
                    ...premiumConfig.plugins,
                    tooltip: {
                        ...premiumConfig.plugins.tooltip,
                        callbacks: {
                            label: function(context) {
                                const multiplier = context.dataIndex === 0 ? '' : ` (${(11.3/context.parsed.y).toFixed(1)}x moins bien)`;
                                return `${context.parsed.y}% conversion${multiplier}`;
                            }
                        }
                    }
                }
            }
        });
        console.log('✨ Premium Conversion chart created');
    }

    // 2. Graphique ROI - Design Spectaculaire
    const roiCanvas = document.getElementById('roiChart');
    if (roiCanvas) {
        const ctx = roiCanvas.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['🚀 OSOM Strategy', '💸 Publicités Payantes'],
                datasets: [{
                    label: 'Key Events pour 10K CHF',
                    data: [1146, 8],
                    backgroundColor: [
                        createGradient(ctx, '#FFDD00', '#FFA500'),
                        createGradient(ctx, '#DC2626', '#7F1D1D')
                    ],
                    borderColor: ['#FFDD00', '#DC2626'],
                    borderWidth: 4,
                    borderRadius: 20,
                    borderSkipped: false
                }]
            },
            options: {
                ...premiumConfig,
                scales: {
                    ...premiumConfig.scales,
                    y: {
                        ...premiumConfig.scales.y,
                        max: 1200,
                        ticks: {
                            ...premiumConfig.scales.y.ticks,
                            callback: function(value) {
                                return value + ' events';
                            }
                        }
                    }
                },
                plugins: {
                    ...premiumConfig.plugins,
                    tooltip: {
                        ...premiumConfig.plugins.tooltip,
                        callbacks: {
                            label: function(context) {
                                const ratio = context.dataIndex === 0 ? '143x MIEUX !' : 'Base';
                                return `${context.parsed.y} events (${ratio})`;
                            }
                        }
                    }
                }
            }
        });
        console.log('✨ Premium ROI chart created');
    }

    // 3. Graphique Engagement - Design Magnifique
    const engagementCanvas = document.getElementById('engagementChart');
    if (engagementCanvas) {
        const ctx = engagementCanvas.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['🎯 OSOM', '💸 Paid Search', '🔗 Direct'],
                datasets: [{
                    label: 'Temps d\'Engagement',
                    data: [67.5, 21.3, 32.8],
                    backgroundColor: [
                        createGradient(ctx, '#FFDD00', '#F59E0B'),
                        createGradient(ctx, '#EF4444', '#DC2626'),
                        createGradient(ctx, '#8b5cf6', '#6D28D9')
                    ],
                    borderColor: ['#FFDD00', '#EF4444', '#8b5cf6'],
                    borderWidth: 3,
                    borderRadius: 14,
                    borderSkipped: false
                }]
            },
            options: {
                ...premiumConfig,
                scales: {
                    ...premiumConfig.scales,
                    y: {
                        ...premiumConfig.scales.y,
                        max: 80,
                        ticks: {
                            ...premiumConfig.scales.y.ticks,
                            callback: function(value) {
                                return value + 's';
                            }
                        }
                    }
                },
                plugins: {
                    ...premiumConfig.plugins,
                    tooltip: {
                        ...premiumConfig.plugins.tooltip,
                        callbacks: {
                            label: function(context) {
                                const ratio = context.dataIndex === 0 ? '3.2x PLUS ENGAGEANT' : '';
                                return `${context.parsed.y}s d'engagement ${ratio}`;
                            }
                        }
                    }
                }
            }
        });
        console.log('✨ Premium Engagement chart created');
    }

    // 4. Graphique Traffic - Donut Premium
    const trafficCanvas = document.getElementById('trafficChart');
    if (trafficCanvas) {
        const ctx = trafficCanvas.getContext('2d');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['💸 Paid Search', '🔗 Direct', '❓ Unassigned', '🏆 OSOM FB/IG', '📊 Autres'],
                datasets: [{
                    data: [27.8, 19.8, 10.5, 8.4, 33.5],
                    backgroundColor: [
                        createGradient(ctx, '#DC2626', '#7F1D1D'),
                        createGradient(ctx, '#8b5cf6', '#6D28D9'),
                        createGradient(ctx, '#6B7280', '#374151'),
                        createGradient(ctx, '#FFDD00', '#F59E0B'),
                        createGradient(ctx, '#10b981', '#059669')
                    ],
                    borderWidth: 6,
                    borderColor: '#FFFFFF',
                    hoverBorderWidth: 8,
                    spacing: 4
                }]
            },
            options: {
                ...premiumConfig,
                cutout: '60%',
                plugins: {
                    ...premiumConfig.plugins,
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true,
                            pointStyle: 'circle',
                            font: { size: 12, weight: '600' },
                            color: '#374151'
                        }
                    },
                    tooltip: {
                        ...premiumConfig.plugins.tooltip,
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.parsed}%`;
                            }
                        }
                    }
                }
            }
        });
        console.log('✨ Premium Traffic chart created');
    }

    // 5. Graphique Cost Efficiency - Excellence
    const costCanvas = document.getElementById('costEfficiencyChart');
    if (costCanvas) {
        const ctx = costCanvas.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['🏆 OSOM', '🔍 Google Ads', '📘 Meta Ads'],
                datasets: [{
                    label: 'Coût par Conversion',
                    data: [9, 1154, 2500],
                    backgroundColor: [
                        createGradient(ctx, '#10b981', '#059669'),
                        createGradient(ctx, '#F59E0B', '#D97706'),
                        createGradient(ctx, '#DC2626', '#7F1D1D')
                    ],
                    borderColor: ['#10b981', '#F59E0B', '#DC2626'],
                    borderWidth: 3,
                    borderRadius: 16,
                    borderSkipped: false
                }]
            },
            options: {
                ...premiumConfig,
                scales: {
                    ...premiumConfig.scales,
                    y: {
                        ...premiumConfig.scales.y,
                        type: 'logarithmic',
                        ticks: {
                            ...premiumConfig.scales.y.ticks,
                            callback: function(value) {
                                return value + ' CHF';
                            }
                        }
                    }
                },
                plugins: {
                    ...premiumConfig.plugins,
                    tooltip: {
                        ...premiumConfig.plugins.tooltip,
                        callbacks: {
                            label: function(context) {
                                const ratio = context.dataIndex === 0 ? 'CHAMPION !' : `${Math.round(context.parsed.y/9)}x plus cher`;
                                return `${context.parsed.y} CHF (${ratio})`;
                            }
                        }
                    }
                }
            }
        });
        console.log('✨ Premium Cost Efficiency chart created');
    }

    // 6. Graphique Waste - Scatter Premium
    const wasteCanvas = document.getElementById('wasteChart');
    if (wasteCanvas) {
        const ctx = wasteCanvas.getContext('2d');
        new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: '🏆 OSOM Strategy',
                    data: [{x: 6500, y: 688}],
                    backgroundColor: createGradient(ctx, '#FFDD00', '#F59E0B'),
                    borderColor: '#FFDD00',
                    borderWidth: 4,
                    pointRadius: 20,
                    pointHoverRadius: 25
                }, {
                    label: '💸 Publicité Payante',
                    data: [{x: 97500, y: 49}],
                    backgroundColor: createGradient(ctx, '#DC2626', '#7F1D1D'),
                    borderColor: '#DC2626',
                    borderWidth: 4,
                    pointRadius: 16,
                    pointHoverRadius: 20
                }]
            },
            options: {
                ...premiumConfig,
                plugins: {
                    ...premiumConfig.plugins,
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            padding: 20,
                            usePointStyle: true,
                            pointStyle: 'circle',
                            font: { size: 13, weight: '600' },
                            color: '#374151'
                        }
                    }
                },
                scales: {
                    x: { 
                        ...premiumConfig.scales.x,
                        title: { 
                            display: true, 
                            text: 'Budget Investi (CHF)',
                            font: { size: 14, weight: '600' },
                            color: '#374151'
                        }
                    },
                    y: { 
                        ...premiumConfig.scales.y,
                        title: { 
                            display: true, 
                            text: 'Key Events Générés',
                            font: { size: 14, weight: '600' },
                            color: '#374151'
                        }
                    }
                }
            }
        });
        console.log('✨ Premium Waste chart created');
    }

    // 7. Graphique Timeline - Premium Line Chart
    const timelineCanvas = document.getElementById('timelineChart');
    if (timelineCanvas) {
        const ctx = timelineCanvas.getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan 2025', 'Fév 2025', 'Mar 2025', 'Avr 2025', 'Mai 2025', 'Jun 2025', 'Jul 2025'],
                datasets: [{
                    label: '🚀 Performance OSOM',
                    data: [120, 180, 240, 320, 410, 520, 688],
                    borderColor: '#FFDD00',
                    backgroundColor: createGradient(ctx, 'rgba(255, 221, 0, 0.3)', 'rgba(255, 221, 0, 0.05)'),
                    borderWidth: 4,
                    tension: 0.5,
                    fill: true,
                    pointBackgroundColor: '#FFDD00',
                    pointBorderColor: '#FFFFFF',
                    pointBorderWidth: 3,
                    pointRadius: 8,
                    pointHoverRadius: 12
                }, {
                    label: '💸 Performance Paid Ads',
                    data: [15, 12, 8, 18, 25, 32, 49],
                    borderColor: '#DC2626',
                    backgroundColor: createGradient(ctx, 'rgba(220, 38, 38, 0.2)', 'rgba(220, 38, 38, 0.02)'),
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: '#DC2626',
                    pointBorderColor: '#FFFFFF',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 10
                }]
            },
            options: {
                ...premiumConfig,
                plugins: {
                    ...premiumConfig.plugins,
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            padding: 20,
                            usePointStyle: true,
                            pointStyle: 'line',
                            font: { size: 13, weight: '600' },
                            color: '#374151'
                        }
                    }
                },
                scales: {
                    ...premiumConfig.scales,
                    y: { 
                        ...premiumConfig.scales.y,
                        title: { 
                            display: true, 
                            text: 'Key Events',
                            font: { size: 14, weight: '600' },
                            color: '#374151'
                        }
                    }
                }
            }
        });
        console.log('✨ Premium Timeline chart created');
    }

    console.log('🎉 Tous les graphiques premium sont créés avec succès !');
});