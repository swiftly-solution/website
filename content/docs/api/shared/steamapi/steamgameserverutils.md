---
title: SteamGameServerUtils
---

```csharp
public static class SteamGameServerUtils
```

#### Inheritance

#### Inherited Members

## Methods

### BOverlayNeedsPresent()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L147)

```csharp
public static bool BOverlayNeedsPresent()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CheckFileSignature(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L162)

```csharp
public static SteamAPICall_t CheckFileSignature(string szFileName)
```

#### Parameters

- **szFileName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [SteamAPICall_t](/docs/api/shared/steamapi/steamapicall_t)

### DismissFloatingGamepadTextInput()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L336)

```csharp
public static bool DismissFloatingGamepadTextInput()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DismissGamepadTextInput()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L344)

```csharp
public static bool DismissGamepadTextInput()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FilterText(ETextFilteringContext, CSteamID, string, out string, uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L288)

```csharp
public static int FilterText(ETextFilteringContext eContext, CSteamID sourceSteamID, string pchInputMessage, out string pchOutFilteredText, uint nByteSizeOutFilteredText)
```

#### Parameters

- **eContext**: [ETextFilteringContext](/docs/api/shared/steamapi/etextfilteringcontext)
- **sourceSteamID**: [CSteamID](/docs/api/shared/steamapi/csteamid)
- **pchInputMessage**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **pchOutFilteredText**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **nByteSizeOutFilteredText**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetAPICallFailureReason(SteamAPICall_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L96)

```csharp
public static ESteamAPICallFailure GetAPICallFailureReason(SteamAPICall_t hSteamAPICall)
```

#### Parameters

- **hSteamAPICall**: [SteamAPICall_t](/docs/api/shared/steamapi/steamapicall_t)

#### Returns

- [ESteamAPICallFailure](/docs/api/shared/steamapi/esteamapicallfailure)

### GetAPICallResult(SteamAPICall_t, nint, int, int, out bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L101)

```csharp
public static bool GetAPICallResult(SteamAPICall_t hSteamAPICall, nint pCallback, int cubCallback, int iCallbackExpected, out bool pbFailed)
```

#### Parameters

- **hSteamAPICall**: [SteamAPICall_t](/docs/api/shared/steamapi/steamapicall_t)
- **pCallback**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **cubCallback**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **iCallbackExpected**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pbFailed**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetAppID()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L73)

```csharp
public static AppId_t GetAppID()
```

#### Returns

- [AppId_t](/docs/api/shared/steamapi/appid_t)

### GetConnectedUniverse()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L22)

```csharp
public static EUniverse GetConnectedUniverse()
```

#### Returns

- [EUniverse](/docs/api/shared/steamapi/euniverse)

### GetCurrentBatteryPower()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L65)

```csharp
public static byte GetCurrentBatteryPower()
```

#### Returns

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### GetEnteredGamepadTextInput(out string, uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L188)

```csharp
public static bool GetEnteredGamepadTextInput(out string pchText, uint cchText)
```

#### Parameters

- **pchText**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **cchText**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetEnteredGamepadTextLength()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L183)

```csharp
public static uint GetEnteredGamepadTextLength()
```

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetIPCCallCount()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L112)

```csharp
public static uint GetIPCCallCount()
```

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetIPCountry()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L39)

```csharp
public static string GetIPCountry()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetIPv6ConnectivityState(ESteamIPv6ConnectivityProtocol)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L303)

```csharp
public static ESteamIPv6ConnectivityState GetIPv6ConnectivityState(ESteamIPv6ConnectivityProtocol eProtocol)
```

#### Parameters

- **eProtocol**: [ESteamIPv6ConnectivityProtocol](/docs/api/shared/steamapi/esteamipv6connectivityprotocol)

#### Returns

- [ESteamIPv6ConnectivityState](/docs/api/shared/steamapi/esteamipv6connectivitystate)

### GetImageRGBA(int, byte[], int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L57)

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

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L47)

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

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L9)

```csharp
public static uint GetSecondsSinceAppActive()
```

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetSecondsSinceComputerActive()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L14)

```csharp
public static uint GetSecondsSinceComputerActive()
```

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetServerRealTime()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L30)

```csharp
public static uint GetServerRealTime()
```

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetSteamUILanguage()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L200)

```csharp
public static string GetSteamUILanguage()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### InitFilterText(uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L274)

```csharp
public static bool InitFilterText(uint unFilterOptions = 0)
```

#### Parameters

- **unFilterOptions**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsAPICallCompleted(SteamAPICall_t, out bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L91)

```csharp
public static bool IsAPICallCompleted(SteamAPICall_t hSteamAPICall, out bool pbFailed)
```

#### Parameters

- **hSteamAPICall**: [SteamAPICall_t](/docs/api/shared/steamapi/steamapicall_t)
- **pbFailed**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsOverlayEnabled()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L132)

```csharp
public static bool IsOverlayEnabled()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsSteamChinaLauncher()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L262)

```csharp
public static bool IsSteamChinaLauncher()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsSteamInBigPictureMode()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L226)

```csharp
public static bool IsSteamInBigPictureMode()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsSteamRunningInVR()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L208)

```csharp
public static bool IsSteamRunningInVR()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsSteamRunningOnSteamDeck()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L311)

```csharp
public static bool IsSteamRunningOnSteamDeck()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsVRHeadsetStreamingEnabled()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L242)

```csharp
public static bool IsVRHeadsetStreamingEnabled()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetGameLauncherMode(bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L328)

```csharp
public static void SetGameLauncherMode(bool bLauncherMode)
```

#### Parameters

- **bLauncherMode**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetOverlayNotificationInset(int, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L216)

```csharp
public static void SetOverlayNotificationInset(int nHorizontalInset, int nVerticalInset)
```

#### Parameters

- **nHorizontalInset**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **nVerticalInset**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SetOverlayNotificationPosition(ENotificationPosition)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L82)

```csharp
public static void SetOverlayNotificationPosition(ENotificationPosition eNotificationPosition)
```

#### Parameters

- **eNotificationPosition**: [ENotificationPosition](/docs/api/shared/steamapi/enotificationposition)

### SetVRHeadsetStreamingEnabled(bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L254)

```csharp
public static void SetVRHeadsetStreamingEnabled(bool bEnabled)
```

#### Parameters

- **bEnabled**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetWarningMessageHook(SteamAPIWarningMessageHook_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L123)

```csharp
public static void SetWarningMessageHook(SteamAPIWarningMessageHook_t pFunction)
```

#### Parameters

- **pFunction**: [SteamAPIWarningMessageHook_t](/docs/api/shared/steamapi/steamapiwarningmessagehook_t)

### ShowFloatingGamepadTextInput(EFloatingGamepadTextInputMode, int, int, int, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L320)

```csharp
public static bool ShowFloatingGamepadTextInput(EFloatingGamepadTextInputMode eKeyboardMode, int nTextFieldXPosition, int nTextFieldYPosition, int nTextFieldWidth, int nTextFieldHeight)
```

#### Parameters

- **eKeyboardMode**: [EFloatingGamepadTextInputMode](/docs/api/shared/steamapi/efloatinggamepadtextinputmode)
- **nTextFieldXPosition**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **nTextFieldYPosition**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **nTextFieldWidth**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **nTextFieldHeight**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ShowGamepadTextInput(EGamepadTextInputMode, EGamepadTextInputLineMode, string, uint, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L172)

```csharp
public static bool ShowGamepadTextInput(EGamepadTextInputMode eInputMode, EGamepadTextInputLineMode eLineInputMode, string pchDescription, uint unCharMax, string pchExistingText)
```

#### Parameters

- **eInputMode**: [EGamepadTextInputMode](/docs/api/shared/steamapi/egamepadtextinputmode)
- **eLineInputMode**: [EGamepadTextInputLineMode](/docs/api/shared/steamapi/egamepadtextinputlinemode)
- **pchDescription**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **unCharMax**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pchExistingText**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StartVRDashboard()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverutils.cs#L234)

```csharp
public static void StartVRDashboard()
```

