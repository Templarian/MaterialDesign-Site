# Xamarin - Getting Started

So the first job is to get the font pack you can download the whole Icon pack as a Zip using the big download button top right and inside this zip you will find the required .ttf file.

> The CDN is a great way to copy the unicode values. [View the CDN](https://cdn.materialdesignicons.com/{{version}}/)

## Adding the .ttf Font file to your Project.

To use the Font file you first need to add it to each OS project.

### Android

Place the file inside the Assets folder (Not the Resources folder!) and be sure to set it's Build type to AndroidAsset, you can do this by right clicking on the file and selecting properties.

![Android File Location](/assets/resources/xamarin-android-file-location.png) 

### IOS

Place the file inside the Resources folder and be sure to set it's Build type to BundleResource.

![IOS File Location](/assets/resources/xamarin-ios-file-location-small.png) 

Also on IOS (It's never easy with Apple!) you have to include the file in the info.plist as well so that it can be found and used.

```xml
<key>UIAppFonts</key>
<array>
    <string>materialdesignicons-webfont.ttf</string>
</array>
```
 ### UWP

 Place the file inside the Assets folder and be sure to set it's Build type to Content.

 ![UWP File Location](/assets/resources/xamarin-uwp-file-location-small.png) 

 ## Add the Font Pack to the Share Project

 Now that each of the OS projects have the file in their respective Assets folders we need to set-up and use the font pack where we need it in the Shared Project.  The best way I have found to do this is to add the new Font pack as a Resource to the shared Resource Dictionary, so add to either your App.Xaml or the Page.Xaml you want the font/icon used on.  You will notice that I have set the Key (3rd line down) to 'IconFont' this is your name for the Font pack and can be set to what ever naming convention you choose but you will match it up later.

```xml
<ResourceDictionary>
    <OnPlatform x:TypeArguments="x:String"
                x:Key="IconFont">
        <On Platform="Android"
            Value="materialdesignicons-webfont.ttf#Material Design Icons" />
        <On Platform="iOS"
            Value="Material Design Icons" />
        <On Platform="UWP"
            Value="/Assets/materialdesignicons-webfont.ttf#Material Design Icons" />
    </OnPlatform>
</ResourceDictionary>
```

 As you can see we need to add an entry for each OS as they each have different values.  For IOS you leave the file extention off, but for Android and UWP it needs the .ttf extention and they also have:

 > #Material Design Icons

 This is the actual name of the Font inside the .ttf file.

 # Finally Using the Fonts
 
 So now we are set-up and in a position to add the text and icons to our Buttons and Labels and this is the easy bit, as you just need to set the FontFamily with the Static Resource name you gave in your Resource Dictionary above, so in this case 'IconFont'

 ```xml
<Button Text="&#xf844;"
    TextColor="Green"
    BackgroundColor="Transparent"
    FontFamily="{StaticResource IconFont}"
    FontSize="Medium" />
```

 As you can see, you can set the rest of the Text formatting as normal Color, Size etc and these will also work from CSS if you using that new and very cool ability within XamarinForms, if your not now is your chance to go look at the docs [XamarinForms with CSS](https://docs.microsoft.com/en-us/xamarin/xamarin-forms/user-interface/styles/css/)

 ## But what about Selecting your Icons
 
 Well if you look at the Text I have set for the button above you will see it looks like I just slapped the keyboard... but no that string has meaning...
 
 > &#xf4ab;
 
 The '&#x' and trailing ';' are standard and ensure that the Font Pack gives back an Icon and not text like ABC123.  The part in the middle that starts with 'f' is the icon Unicode within the font pack so in this case
 
 > f844
 
 This just so happens to be the Xamarin Logo (yes Material Design Icon pack is that big.)
 The awesome part is that as it's just plain text you can if your feeling adventurous make this a Binding to your ViewModel and change the Icon's on the fly.
 If you find looking around on the [Materialdesignicons](https://materialdesignicons.com/) website difficult as a search will show the icon and it's name rather than the ID then I found this web tool [CharacterMap](http://bluejamesbond.github.io/CharacterMap/) that you can load the .ttf file into and it shows the icon and all of it's details including the important 'f' unicode
 
 ![Font Family And Code](/assets/resources/xamarin-fontfamily-and-code-small.png)
 
 ## CSS @Font-Face
 
 I use CSS in all my Xamarin Projects and love that something I used in the web world has come over as it's much cleaner and easier than adding massive ResourceDictionarys to my projects.  However the CSS on the Xamarin side isn't fully compliant yet (It's being worked on!) so if you are thinking about using @Font-Face in your CSS this currently isn't supported. 
