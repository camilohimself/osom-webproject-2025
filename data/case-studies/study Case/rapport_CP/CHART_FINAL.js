// Script Chart.js FINAL - Dashboard Parfait OSOM
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎯 Initialisation dashboard final parfait...');
    
    // Configuration globale parfaite
    Chart.defaults.font.family = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";
    Chart.defaults.font.size = 12;
    Chart.defaults.font.weight = '500';
    Chart.defaults.animation.duration = 1200;
    Chart.defaults.animation.easing = 'easeOutQuart';
    Chart.defaults.elements.bar.borderRadius = 6;
    Chart.defaults.elements.bar.borderSkipped = false;
    Chart.defaults.elements.point.radius = 0;
    Chart.defaults.elements.point.hoverRadius = 6;
    Chart.defaults.elements.line.borderWidth = 3;

    // Palette OSOM stricte
    const osomPalette = {
        yellow: '#FFDD00',
        gray: '#6B6B6B', 
        violet: '#8b5cf6',
        lightViolet: '#a78bfa',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        textPrimary: '#1f2937',
        textSecondary: '#6b7280',
        gridColor: 'rgba(156, 163, 175, 0.06)'
    };

    // Configuration finale
    const finalConfig = {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                top: 15,
                right: 15,
                bottom: 10,
                left: 10
            }
        },
        interaction: {
            intersect: false,
            mode: 'index'
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: 'rgba(255, 255, 255, 0.98)',
                titleColor: osomPalette.textPrimary,
                bodyColor: osomPalette.textSecondary,
                borderColor: osomPalette.violet,
                borderWidth: 1,
                cornerRadius: 8,
                padding: 12,
                titleFont: { size: 12, weight: '600' },
                bodyFont: { size: 11, weight: '500' },
                displayColors: false
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
                    color: osomPalette.textSecondary,
                    font: { size: 11, weight: '500' },
                    padding: 12
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: osomPalette.gridColor,
                    lineWidth: 1,
                    drawTicks: false
                },
                border: {
                    display: false
                },
                ticks: {
                    color: osomPalette.textSecondary,
                    font: { size: 11, weight: '500' },
                    padding: 12,
                    maxTicksLimit: 6
                }
            }
        }
    };

    // 1. Graphique Conversion - PARFAIT
    const conversionCanvas = document.getElementById('conversionChart');
    if (conversionCanvas) {
        const ctx = conversionCanvas.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['OSOM', 'Paid Search', 'Direct', 'Organic'],
                datasets: [{
                    label: 'Taux de Conversion (%)',
                    data: [11.3, 1.0, 5.9, 4.6],
                    backgroundColor: [
                        osomPalette.yellow,
                        osomPalette.gray,
                        osomPalette.violet,
                        osomPalette.lightViolet
                    ],
                    borderWidth: 0,
                    barThickness: 45,
                    categoryPercentage: 0.8,
                    barPercentage: 0.7
                }]
            },
            options: {
                ...finalConfig,
                scales: {
                    ...finalConfig.scales,
                    y: {
                        ...finalConfig.scales.y,
                        max: 13,
                        ticks: {
                            ...finalConfig.scales.y.ticks,
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
        console.log('✅ Conversion chart parfait');
    }

    // 2. Graphique ROI - PARFAIT
    const roiCanvas = document.getElementById('roiChart');
    if (roiCanvas) {
        const ctx = roiCanvas.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['OSOM Strategy', 'Publicités Payantes'],
                datasets: [{
                    label: 'Key Events pour 10K CHF',
                    data: [1146, 8],
                    backgroundColor: [
                        osomPalette.yellow,
                        osomPalette.gray
                    ],
                    borderWidth: 0,
                    barThickness: 80,
                    categoryPercentage: 0.6,
                    barPercentage: 0.8
                }]
            },
            options: {
                ...finalConfig,
                scales: {
                    ...finalConfig.scales,
                    y: {
                        ...finalConfig.scales.y,
                        max: 1200
                    }
                }
            }
        });
        console.log('✅ ROI chart parfait');
    }

    // 3. Graphique Engagement - PARFAIT
    const engagementCanvas = document.getElementById('engagementChart');
    if (engagementCanvas) {
        const ctx = engagementCanvas.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['OSOM', 'Paid Search', 'Direct'],
                datasets: [{
                    label: 'Temps d\'Engagement (s)',
                    data: [67.5, 21.3, 32.8],
                    backgroundColor: [
                        osomPalette.yellow,
                        osomPalette.gray,
                        osomPalette.violet
                    ],
                    borderWidth: 0,
                    barThickness: 50,
                    categoryPercentage: 0.7,
                    barPercentage: 0.8
                }]
            },
            options: {
                ...finalConfig,
                scales: {
                    ...finalConfig.scales,
                    y: {
                        ...finalConfig.scales.y,
                        max: 80,
                        ticks: {
                            ...finalConfig.scales.y.ticks,
                            callback: function(value) {
                                return value + 's';
                            }
                        }
                    }
                }
            }
        });
        console.log('✅ Engagement chart parfait');
    }

    // 4. Graphique Traffic - PARFAIT
    const trafficCanvas = document.getElementById('trafficChart');
    if (trafficCanvas) {
        const ctx = trafficCanvas.getContext('2d');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Paid Search', 'Direct', 'Unassigned', 'OSOM FB/IG', 'Autres'],
                datasets: [{
                    data: [27.8, 19.8, 10.5, 8.4, 33.5],
                    backgroundColor: [
                        osomPalette.gray,
                        osomPalette.violet,
                        '#E5E7EB',
                        osomPalette.yellow,
                        osomPalette.lightViolet
                    ],
                    borderWidth: 3,
                    borderColor: '#FFFFFF'
                }]
            },
            options: {
                ...finalConfig,
                cutout: '65%',
                plugins: {
                    ...finalConfig.plugins,
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            padding: 15,
                            usePointStyle: true,
                            pointStyle: 'circle',
                            font: { size: 10, weight: '500' },
                            color: osomPalette.textSecondary,
                            boxWidth: 8,
                            boxHeight: 8
                        }
                    }
                }
            }
        });
        console.log('✅ Traffic chart parfait');
    }

    // 5. Graphique Cost Efficiency - CORRIGÉ ÉCHELLE
    const costCanvas = document.getElementById('costEfficiencyChart');
    if (costCanvas) {
        const ctx = costCanvas.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['OSOM', 'Google Ads', 'Meta Ads'],
                datasets: [{
                    label: 'Coût par Conversion (CHF)',
                    data: [9, 1154, 2500],
                    backgroundColor: [
                        osomPalette.yellow,  // JAUNE OSOM au lieu de vert
                        osomPalette.warning,
                        osomPalette.error
                    ],
                    borderWidth: 0,
                    barThickness: 50,
                    categoryPercentage: 0.7,
                    barPercentage: 0.8
                }]
            },
            options: {
                ...finalConfig,
                scales: {
                    ...finalConfig.scales,
                    y: {
                        ...finalConfig.scales.y,
                        type: 'linear',  // PAS logarithmique
                        max: 2800,
                        ticks: {
                            ...finalConfig.scales.y.ticks,
                            stepSize: 500,
                            callback: function(value) {
                                return value + ' CHF';
                            }
                        }
                    }
                }
            }
        });
        console.log('✅ Cost Efficiency chart corrigé');
    }

    // 6. Graphique Waste - CORRIGÉ POINTS
    const wasteCanvas = document.getElementById('wasteChart');
    if (wasteCanvas) {
        const ctx = wasteCanvas.getContext('2d');
        new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'OSOM Strategy',
                    data: [{x: 6500, y: 688}],
                    backgroundColor: osomPalette.yellow,
                    borderColor: osomPalette.yellow,
                    borderWidth: 3,
                    pointRadius: 12,  // Plus gros
                    pointHoverRadius: 15
                }, {
                    label: 'Publicité Payante',
                    data: [{x: 97500, y: 49}],
                    backgroundColor: osomPalette.gray,
                    borderColor: osomPalette.gray,
                    borderWidth: 3,
                    pointRadius: 8,
                    pointHoverRadius: 12
                }]
            },
            options: {
                ...finalConfig,
                plugins: {
                    ...finalConfig.plugins,
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            padding: 15,
                            usePointStyle: true,
                            pointStyle: 'circle',
                            font: { size: 11, weight: '500' },
                            color: osomPalette.textSecondary,
                            boxWidth: 8,
                            boxHeight: 8
                        }
                    }
                },
                scales: {
                    x: { 
                        ...finalConfig.scales.x,
                        title: { 
                            display: true, 
                            text: 'Budget Investi (CHF)',
                            font: { size: 11, weight: '600' },
                            color: osomPalette.textSecondary,
                            padding: { top: 8 }
                        },
                        max: 110000  // Limite pour voir les points
                    },
                    y: { 
                        ...finalConfig.scales.y,
                        title: { 
                            display: true, 
                            text: 'Key Events Générés',
                            font: { size: 11, weight: '600' },
                            color: osomPalette.textSecondary,
                            padding: { bottom: 8 }
                        },
                        max: 750
                    }
                }
            }
        });
        console.log('✅ Waste chart corrigé');
    }

    // 7. Graphique Timeline - CORRIGÉ ÉCHELLE ET VISIBILITÉ
    const timelineCanvas = document.getElementById('timelineChart');
    if (timelineCanvas) {
        const ctx = timelineCanvas.getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan 2025', 'Fév 2025', 'Mar 2025', 'Avr 2025', 'Mai 2025', 'Jun 2025', 'Jul 2025'],
                datasets: [{
                    label: 'Performance OSOM',
                    data: [120, 180, 240, 320, 410, 520, 688],
                    borderColor: osomPalette.yellow,
                    backgroundColor: 'rgba(255, 221, 0, 0.08)',
                    borderWidth: 4,
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: osomPalette.yellow,
                    pointBorderColor: '#FFFFFF',
                    pointBorderWidth: 3,
                    pointRadius: 6,
                    pointHoverRadius: 8
                }, {
                    label: 'Performance Paid Ads',
                    data: [15, 12, 8, 18, 25, 32, 49],
                    borderColor: osomPalette.gray,
                    backgroundColor: 'rgba(107, 107, 107, 0.05)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: osomPalette.gray,
                    pointBorderColor: '#FFFFFF',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6
                }]
            },
            options: {
                ...finalConfig,
                scales: {
                    ...finalConfig.scales,
                    y: { 
                        ...finalConfig.scales.y,
                        min: 0,
                        max: 750,  // Échelle fixe pour voir la progression
                        title: { 
                            display: true, 
                            text: 'Key Events',
                            font: { size: 11, weight: '600' },
                            color: osomPalette.textSecondary,
                            padding: { bottom: 8 }
                        }
                    }
                },
                plugins: {
                    ...finalConfig.plugins,
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            padding: 15,
                            usePointStyle: true,
                            pointStyle: 'line',
                            font: { size: 11, weight: '500' },
                            color: osomPalette.textSecondary,
                            boxWidth: 20,
                            boxHeight: 3
                        }
                    }
                }
            }
        });
        console.log('✅ Timeline chart corrigé');
    }

    console.log('🏆 DASHBOARD FINAL PARFAIT CRÉÉ !');
});