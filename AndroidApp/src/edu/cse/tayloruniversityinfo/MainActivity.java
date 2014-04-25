package edu.cse.tayloruniversityinfo;

import android.app.Activity;
import android.content.Context;
import android.os.Bundle;
import android.view.GestureDetector;
import android.view.KeyEvent;
import android.view.Menu;
import android.view.MotionEvent;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends Activity {
	
	protected MyWebView myWebView;
    
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		myWebView = new MyWebView(this);
		myWebView.loadUrl("http://cse.taylor.edu/~pbrocker/Html-Javascript/");
		WebSettings webSettings = myWebView.getSettings();
		webSettings.setJavaScriptEnabled(true);
		myWebView.setWebViewClient(new WebViewClient());
		setContentView(myWebView);
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}

	@Override
	public boolean onKeyDown(int keyCode, KeyEvent event) {
        if(event.getAction() == KeyEvent.ACTION_DOWN){
            switch(keyCode)
            {
            case KeyEvent.KEYCODE_BACK:
                if(myWebView.canGoBack()){
                    myWebView.goBack();
                }else{
                    finish();
                }
                return true;
            }

        }
        return super.onKeyDown(keyCode, event);
	}
	
	class MyWebView extends WebView {
		
		protected GestureDetector gestureScanner;
		private boolean flung;
		
		private static final int SWIPE_MIN_DISTANCE = 120;
	    //private static final int SWIPE_MAX_OFF_PATH = 250;
	    private static final int SWIPE_THRESHOLD_VELOCITY = 200;

		public MyWebView(Context context) {
			super(context);
			gestureScanner = new GestureDetector(context, sogl);
		}

		@Override
		public boolean onTouchEvent(MotionEvent event) {
			gestureScanner.onTouchEvent(event);
			if(flung) {
				flung = false;
				return true;
			}else{
				return super.onTouchEvent(event);
			}
		}
	
		GestureDetector.SimpleOnGestureListener sogl = new GestureDetector.SimpleOnGestureListener() {
			public boolean onFling(MotionEvent e1, MotionEvent e2, float velocityX,
					float velocityY) {
				try {
					 //left to right swipe .. go to prev page
		            if (e2.getX() - e1.getX() > SWIPE_MIN_DISTANCE && Math.abs(velocityX) > SWIPE_THRESHOLD_VELOCITY) {
		            	flung = true;
		            	if(myWebView.canGoBack()){
		                    myWebView.goBack();
		                }
		                return true;
		            }
				} catch (Exception e){
				}
				return false;
			}
		};
	}

}
