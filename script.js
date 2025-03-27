document.addEventListener('DOMContentLoaded', function() {
    // Scroll to content
    const scrollToContent = document.getElementById('scrollToContent');
    if (scrollToContent) {
        scrollToContent.addEventListener('click', function() {
            document.getElementById('market').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }
    
    // Modal functionality
    const modal = document.getElementById('executiveSummaryModal');
    const showModal = document.getElementById('showExecutiveSummary');
    const closeModal = document.getElementById('closeModal');
    const downloadSummary = document.getElementById('downloadSummary');
    
    if (showModal && modal && closeModal) {
        showModal.addEventListener('click', function() {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });
        
        closeModal.addEventListener('click', function() {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        });
        
        // Close modal when clicking outside of it
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.add('hidden');
                document.body.style.overflow = '';
            }
        });
        
        if (downloadSummary) {
            downloadSummary.addEventListener('click', function() {
                alert('摘要下载功能正在开发中...');
            });
        }
    }
    
    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Action items functionality
    const actionItems = [
        document.getElementById('action1'),
        document.getElementById('action2'),
        document.getElementById('action3'),
        document.getElementById('action4'),
        document.getElementById('action5')
    ];
    
    const actionDetail = document.getElementById('actionDetail');
    const actionTitle = document.getElementById('actionTitle');
    const actionList = document.getElementById('actionList');
    
    // Action item details
    const actionDetails = {
        'action1': {
            title: '成立项目团队',
            items: [
                '组建跨职能团队，包括产品、技术、商务和营销',
                '明确责任分工和决策机制',
                '设定短期和中期目标与时间表',
                '确定资源投入和预算规划'
            ]
        },
        'action2': {
            title: '确定合作伙伴',
            items: [
                '筛选技术实力与创新意愿兼具的OEM/ODM',
                '发起合作意向书与保密协议',
                '明确合作条款与利益分配机制',
                '制定合作工作流程与沟通机制'
            ]
        },
        'action3': {
            title: '详细市场调研',
            items: [
                '分析目标用户需求与痛点',
                '评估竞争产品功能与市场反馈',
                '确定差异化创新点与产品定位',
                '评估市场规模与成长潜力'
            ]
        },
        'action4': {
            title: '制定详细计划',
            items: [
                '明确产品功能与技术路线图',
                '建立项目里程碑与交付节点',
                '制定资源分配计划',
                '设计风险评估与应对策略'
            ]
        },
        'action5': {
            title: '与OEM/ODM沟通',
            items: [
                '介绍项目愿景与商业价值',
                '评估制造商技术能力与资源',
                '讨论初期试点项目安排',
                '明确数据共享与隐私保护方案'
            ]
        }
    };
    
    // Add click event to all action items
    actionItems.forEach(item => {
        if (item) {
            item.addEventListener('click', function() {
                const actionId = this.id;
                const details = actionDetails[actionId];
                
                if (details) {
                    actionTitle.textContent = details.title;
                    
                    // Clear previous list items
                    actionList.innerHTML = '';
                    
                    // Add new list items
                    details.items.forEach(text => {
                        const li = document.createElement('li');
                        li.innerHTML = `• ${text}`;
                        actionList.appendChild(li);
                    });
                    
                    // Show action detail
                    actionDetail.classList.remove('hidden');
                }
            });
        }
    });
});
