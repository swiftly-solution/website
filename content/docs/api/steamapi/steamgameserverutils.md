---
title: SteamGameServerUtils
---

# Class SteamGameServerUtils

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L5)

**Namespace**: [SwiftlyS2.Shared.SteamAPI](/docs/api/steamapi)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public static class SteamGameServerUtils
```

#### Inheritance

- [object](https://learn.microsoft.com/dotnet/api/system.object)
- [SteamGameServerUtils](/docs/api/steamapi/steamgameserverutils)

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### BOverlayNeedsPresent()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L147)

<p> Normally this call is unneeded if your game has a constantly running frame loop that calls the</p>
<p> D3D Present API, or OGL SwapBuffers API every frame.</p>
<p> However, if you have a game that only refreshes the screen on an event driven basis then that can break</p>
<p> the overlay, as it uses your Present/SwapBuffers calls to drive it's internal frame loop and it may also</p>
<p> need to Present() to the screen any time an even needing a notification happens or when the overlay is</p>
<p> brought up over the game by a user.  You can use this API to ask the overlay if it currently need a present</p>
<p> in that case, and then you can check for this periodically (roughly 33hz is desirable) and make sure you</p>
<p> refresh the screen with Present or SwapBuffers to allow the overlay to do it's work.</p>

```csharp
public static bool BOverlayNeedsPresent()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CheckFileSignature(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L162)

<p> Asynchronous call to check if an executable file has been signed using the public key set on the signing tab</p>
<p> of the partner site, for example to refuse to load modified executable files.</p>
<p> The result is returned in CheckFileSignature_t.</p>
<p>   k_ECheckFileSignatureNoSignaturesFoundForThisApp - This app has not been configured on the signing tab of the partner site to enable this function.</p>
<p>   k_ECheckFileSignatureNoSignaturesFoundForThisFile - This file is not listed on the signing tab for the partner site.</p>
<p>   k_ECheckFileSignatureFileNotFound - The file does not exist on disk.</p>
<p>   k_ECheckFileSignatureInvalidSignature - The file exists, and the signing tab has been set for this file, but the file is either not signed or the signature does not match.</p>
<p>   k_ECheckFileSignatureValidSignature - The file is signed and the signature is valid.</p>

```csharp
public static SteamAPICall_t CheckFileSignature(string szFileName)
```

#### Parameters

- **szFileName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [SteamAPICall_t](/docs/api/steamapi/steamapicall_t)

### DismissFloatingGamepadTextInput()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L336)

<p> Dismisses the floating keyboard.</p>

```csharp
public static bool DismissFloatingGamepadTextInput()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DismissGamepadTextInput()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L344)

<p> Dismisses the full-screen text input dialog.</p>

```csharp
public static bool DismissGamepadTextInput()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FilterText(ETextFilteringContext, CSteamID, string, out string, uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L288)

<p> Filters the provided input message and places the filtered result into pchOutFilteredText, using legally required filtering and additional filtering based on the context and user settings</p>
<p>   eContext is the type of content in the input string</p>
<p>   sourceSteamID is the Steam ID that is the source of the input string (e.g. the player with the name, or who said the chat text)</p>
<p>   pchInputText is the input string that should be filtered, which can be ASCII or UTF-8</p>
<p>   pchOutFilteredText is where the output will be placed, even if no filtering is performed</p>
<p>   nByteSizeOutFilteredText is the size (in bytes) of pchOutFilteredText, should be at least strlen(pchInputText)+1</p>
<p> Returns the number of characters (not bytes) filtered</p>

```csharp
public static int FilterText(ETextFilteringContext eContext, CSteamID sourceSteamID, string pchInputMessage, out string pchOutFilteredText, uint nByteSizeOutFilteredText)
```

#### Parameters

- **eContext**: [ETextFilteringContext](/docs/api/steamapi/etextfilteringcontext)
- **sourceSteamID**: [CSteamID](/docs/api/steamapi/csteamid)
- **pchInputMessage**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **pchOutFilteredText**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **nByteSizeOutFilteredText**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetAPICallFailureReason(SteamAPICall_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L96)

```csharp
public static ESteamAPICallFailure GetAPICallFailureReason(SteamAPICall_t hSteamAPICall)
```

#### Parameters

- **hSteamAPICall**: [SteamAPICall_t](/docs/api/steamapi/steamapicall_t)

#### Returns

- [ESteamAPICallFailure](/docs/api/steamapi/esteamapicallfailure)

### GetAPICallResult(SteamAPICall_t, nint, int, int, out bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L101)

```csharp
public static bool GetAPICallResult(SteamAPICall_t hSteamAPICall, nint pCallback, int cubCallback, int iCallbackExpected, out bool pbFailed)
```

#### Parameters

- **hSteamAPICall**: [SteamAPICall_t](/docs/api/steamapi/steamapicall_t)
- **pCallback**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **cubCallback**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **iCallbackExpected**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pbFailed**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetAppID()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L73)

<p> returns the appID of the current process</p>

```csharp
public static AppId_t GetAppID()
```

#### Returns

- [AppId_t](/docs/api/steamapi/appid_t)

### GetConnectedUniverse()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L22)

<p> the universe this client is connecting to</p>

```csharp
public static EUniverse GetConnectedUniverse()
```

#### Returns

- [EUniverse](/docs/api/steamapi/euniverse)

### GetCurrentBatteryPower()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L65)

<p> return the amount of battery power left in the current system in % [0..100], 255 for being on AC power</p>

```csharp
public static byte GetCurrentBatteryPower()
```

#### Returns

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### GetEnteredGamepadTextInput(out string, uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L188)

```csharp
public static bool GetEnteredGamepadTextInput(out string pchText, uint cchText)
```

#### Parameters

- **pchText**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **cchText**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetEnteredGamepadTextLength()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L183)

<p> Returns previously entered text &amp; length</p>

```csharp
public static uint GetEnteredGamepadTextLength()
```

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetIPCCallCount()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L112)

<p> returns the number of IPC calls made since the last time this function was called</p>
<p> Used for perf debugging so you can understand how many IPC calls your game makes per frame</p>
<p> Every IPC call is at minimum a thread context switch if not a process one so you want to rate</p>
<p> control how often you do them.</p>

```csharp
public static uint GetIPCCallCount()
```

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetIPCountry()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L39)

<p> returns the 2 digit ISO 3166-1-alpha-2 format country code this client is running in (as looked up via an IP-to-location database)</p>
<p> e.g "US" or "UK".</p>

```csharp
public static string GetIPCountry()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetIPv6ConnectivityState(ESteamIPv6ConnectivityProtocol)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L303)

<p> Return what we believe your current ipv6 connectivity to "the internet" is on the specified protocol.</p>
<p> This does NOT tell you if the Steam client is currently connected to Steam via ipv6.</p>

```csharp
public static ESteamIPv6ConnectivityState GetIPv6ConnectivityState(ESteamIPv6ConnectivityProtocol eProtocol)
```

#### Parameters

- **eProtocol**: [ESteamIPv6ConnectivityProtocol](/docs/api/steamapi/esteamipv6connectivityprotocol)

#### Returns

- [ESteamIPv6ConnectivityState](/docs/api/steamapi/esteamipv6connectivitystate)

### GetImageRGBA(int, byte[], int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L57)

<p> returns true if the image exists, and the buffer was successfully filled out</p>
<p> results are returned in RGBA format</p>
<p> the destination buffer size should be 4 * height * width * sizeof(char)</p>

```csharp
public static bool GetImageRGBA(int iImage, byte[] pubDest, int nDestBufferSize)
```

#### Parameters

- **iImage**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pubDest**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **nDestBufferSize**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetImageSize(int, out uint, out uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L47)

<p> returns true if the image exists, and valid sizes were filled out</p>

```csharp
public static bool GetImageSize(int iImage, out uint pnWidth, out uint pnHeight)
```

#### Parameters

- **iImage**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pnWidth**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pnHeight**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetSecondsSinceAppActive()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L9)

<p> return the number of seconds since the user</p>

```csharp
public static uint GetSecondsSinceAppActive()
```

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetSecondsSinceComputerActive()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L14)

```csharp
public static uint GetSecondsSinceComputerActive()
```

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetServerRealTime()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L30)

<p> Steam server time.  Number of seconds since January 1, 1970, GMT (i.e unix time)</p>

```csharp
public static uint GetServerRealTime()
```

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetSteamUILanguage()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L200)

<p> returns the language the steam client is running in, you probably want ISteamApps::GetCurrentGameLanguage instead, this is for very special usage cases</p>

```csharp
public static string GetSteamUILanguage()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### InitFilterText(uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L274)

<p> Initializes text filtering, loading dictionaries for the language the game is running in.</p>
<p>   unFilterOptions are reserved for future use and should be set to 0</p>
<p> Returns false if filtering is unavailable for the game's language, in which case FilterText() will act as a passthrough.</p>
<p> Users can customize the text filter behavior in their Steam Account preferences:</p>
<p> https://store.steampowered.com/account/preferences#CommunityContentPreferences</p>

```csharp
public static bool InitFilterText(uint unFilterOptions = 0)
```

#### Parameters

- **unFilterOptions**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsAPICallCompleted(SteamAPICall_t, out bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L91)

<p> API asynchronous call results</p>
<p> can be used directly, but more commonly used via the callback dispatch API (see steam_api.h)</p>

```csharp
public static bool IsAPICallCompleted(SteamAPICall_t hSteamAPICall, out bool pbFailed)
```

#### Parameters

- **hSteamAPICall**: [SteamAPICall_t](/docs/api/steamapi/steamapicall_t)
- **pbFailed**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsOverlayEnabled()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L132)

<p> Returns true if the overlay is running &amp; the user can access it. The overlay process could take a few seconds to</p>
<p> start &amp; hook the game process, so this function will initially return false while the overlay is loading.</p>

```csharp
public static bool IsOverlayEnabled()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsSteamChinaLauncher()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L262)

<p> Returns whether this steam client is a Steam China specific client, vs the global client.</p>

```csharp
public static bool IsSteamChinaLauncher()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsSteamInBigPictureMode()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L226)

<p> returns true if Steam &amp; the Steam Overlay are running in Big Picture mode</p>
<p> Games much be launched through the Steam client to enable the Big Picture overlay. During development,</p>
<p> a game can be added as a non-steam game to the developers library to test this feature</p>

```csharp
public static bool IsSteamInBigPictureMode()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsSteamRunningInVR()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L208)

<p> returns true if Steam itself is running in VR mode</p>

```csharp
public static bool IsSteamRunningInVR()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsSteamRunningOnSteamDeck()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L311)

<p> returns true if currently running on the Steam Deck device</p>

```csharp
public static bool IsSteamRunningOnSteamDeck()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsVRHeadsetStreamingEnabled()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L242)

<p> Returns true if the HMD content will be streamed via Steam Remote Play</p>

```csharp
public static bool IsVRHeadsetStreamingEnabled()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetGameLauncherMode(bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L328)

<p> In game launchers that don't have controller support you can call this to have Steam Input translate the controller input into mouse/kb to navigate the launcher</p>

```csharp
public static void SetGameLauncherMode(bool bLauncherMode)
```

#### Parameters

- **bLauncherMode**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetOverlayNotificationInset(int, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L216)

<p> Sets the inset of the overlay notification from the corner specified by SetOverlayNotificationPosition.</p>

```csharp
public static void SetOverlayNotificationInset(int nHorizontalInset, int nVerticalInset)
```

#### Parameters

- **nHorizontalInset**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **nVerticalInset**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SetOverlayNotificationPosition(ENotificationPosition)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L82)

<p> Sets the position where the overlay instance for the currently calling game should show notifications.</p>
<p> This position is per-game and if this function is called from outside of a game context it will do nothing.</p>

```csharp
public static void SetOverlayNotificationPosition(ENotificationPosition eNotificationPosition)
```

#### Parameters

- **eNotificationPosition**: [ENotificationPosition](/docs/api/steamapi/enotificationposition)

### SetVRHeadsetStreamingEnabled(bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L254)

<p> Set whether the HMD content will be streamed via Steam Remote Play</p>
<p> If this is set to true, then the scene in the HMD headset will be streamed, and remote input will not be allowed.</p>
<p> If this is set to false, then the application window will be streamed instead, and remote input will be allowed.</p>
<p> The default is true unless "VRHeadsetStreaming" "0" is in the extended appinfo for a game.</p>
<p> (this is useful for games that have asymmetric multiplayer gameplay)</p>

```csharp
public static void SetVRHeadsetStreamingEnabled(bool bEnabled)
```

#### Parameters

- **bEnabled**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetWarningMessageHook(SteamAPIWarningMessageHook_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L123)

<p> API warning handling</p>
<p> 'int' is the severity; 0 for msg, 1 for warning</p>
<p> 'const char *' is the text of the message</p>
<p> callbacks will occur directly after the API function is called that generated the warning or message</p>

```csharp
public static void SetWarningMessageHook(SteamAPIWarningMessageHook_t pFunction)
```

#### Parameters

- **pFunction**: [SteamAPIWarningMessageHook_t](/docs/api/steamapi/steamapiwarningmessagehook_t)

### ShowFloatingGamepadTextInput(EFloatingGamepadTextInputMode, int, int, int, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L320)

<p> Opens a floating keyboard over the game content and sends OS keyboard keys directly to the game.</p>
<p> The text field position is specified in pixels relative the origin of the game window and is used to position the floating keyboard in a way that doesn't cover the text field</p>

```csharp
public static bool ShowFloatingGamepadTextInput(EFloatingGamepadTextInputMode eKeyboardMode, int nTextFieldXPosition, int nTextFieldYPosition, int nTextFieldWidth, int nTextFieldHeight)
```

#### Parameters

- **eKeyboardMode**: [EFloatingGamepadTextInputMode](/docs/api/steamapi/efloatinggamepadtextinputmode)
- **nTextFieldXPosition**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **nTextFieldYPosition**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **nTextFieldWidth**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **nTextFieldHeight**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ShowGamepadTextInput(EGamepadTextInputMode, EGamepadTextInputLineMode, string, uint, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L172)

<p> Activates the full-screen text input dialog which takes a initial text string and returns the text the user has typed</p>

```csharp
public static bool ShowGamepadTextInput(EGamepadTextInputMode eInputMode, EGamepadTextInputLineMode eLineInputMode, string pchDescription, uint unCharMax, string pchExistingText)
```

#### Parameters

- **eInputMode**: [EGamepadTextInputMode](/docs/api/steamapi/egamepadtextinputmode)
- **eLineInputMode**: [EGamepadTextInputLineMode](/docs/api/steamapi/egamepadtextinputlinemode)
- **pchDescription**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **unCharMax**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pchExistingText**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StartVRDashboard()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L234)

<p> ask SteamUI to create and render its OpenVR dashboard</p>

```csharp
public static void StartVRDashboard()
```

