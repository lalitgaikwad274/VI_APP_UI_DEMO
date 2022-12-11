package com.viapp; // replace com.your-app-name with your app’s name
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.ReactMethod;

public class CalendarModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    CalendarModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @ReactMethod
    public void createEvent() {
        Log.d("CalendarModule", "Create event called with name: " + "name"
                + " and location: " + "location");
//        Toast.makeText(reactContext,"hi lalit",Toast.LENGTH_LONG).show();
    }

    @Override
    public String getName() {
        return "CalendarModule";
    }

//    @ReactMethod(isBlockingSynchronousMethod = true)


}