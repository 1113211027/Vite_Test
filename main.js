// main.js

// 引入 Bootstrap 的樣式與功能
import './styles.scss';
import * as bootstrap from 'bootstrap';

// 1. 引入 AOS 動畫庫
import AOS from 'aos';
import 'aos/dist/aos.css'; // 務必引入 CSS

// 2. 初始化 AOS
AOS.init({
  duration: 1000, // 動畫持續時間 (毫秒)，設為 1秒 讓它比較優雅
  easing: 'ease-out', // 動畫曲線
  once: true,     // 設定為 true，動畫只會跑一次，往回捲動不會再閃一次 (比較穩重)
  offset: 120,    // 觸發動畫的偏移量
});