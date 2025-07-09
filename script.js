document.addEventListener('DOMContentLoaded', function() {

    // --- ハンバーガーメニューの処理 ---
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        // nav ulに 'active' クラスをトグル(付け外し)する
        navMenu.classList.toggle('active');
    });
    
    // メニューのリンクをクリックしたらメニューを閉じる
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });


    // --- スクロール時のフェードイン処理 ---
    const sections = document.querySelectorAll('.content-section');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // 要素がビューポートに入ったら 'visible' クラスを付与
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // 一度表示されたら監視を停止する
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px 0px -100px 0px' // 画面下部から100px手前で反応
    });

    // 各セクションを監視対象に追加
    sections.forEach(section => {
        observer.observe(section);
    });

});