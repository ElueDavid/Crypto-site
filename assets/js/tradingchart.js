// assets/js/tradingchart.js
document.addEventListener("DOMContentLoaded", function () {
    new TradingView.widget({
        container_id: "tradingview_widget",
        autosize: true,
        symbol: "BINANCE:BTCUSDT", // Change to your desired crypto pair
        interval: "D",
        timezone: "Etc/UTC",
        theme: "light",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        hide_top_toolbar: false,
        save_image: false,
        studies: [],
        withdateranges: true,
        hide_side_toolbar: false,
        enable_publishing: false,
    });
});
