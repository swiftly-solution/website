---
title: SteamGameServerClient
---

```csharp
public static class SteamGameServerClient
```

#### Inheritance

#### Inherited Members

## Methods

### BReleaseSteamPipe(HSteamPipe)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverclient.cs#L19)

```csharp
public static bool BReleaseSteamPipe(HSteamPipe hSteamPipe)
```

#### Parameters

- **hSteamPipe**: [HSteamPipe](/docs/api/shared/steamapi/hsteampipe)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BShutdownIfAllPipesClosed()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverclient.cs#L226)

```csharp
public static bool BShutdownIfAllPipesClosed()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ConnectToGlobalUser(HSteamPipe)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverclient.cs#L29)

```csharp
public static HSteamUser ConnectToGlobalUser(HSteamPipe hSteamPipe)
```

#### Parameters

- **hSteamPipe**: [HSteamPipe](/docs/api/shared/steamapi/hsteampipe)

#### Returns

- [HSteamUser](/docs/api/shared/steamapi/hsteamuser)

### CreateLocalUser(out HSteamPipe, EAccountType)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverclient.cs#L38)

```csharp
public static HSteamUser CreateLocalUser(out HSteamPipe phSteamPipe, EAccountType eAccountType)
```

#### Parameters

- **phSteamPipe**: [HSteamPipe](/docs/api/shared/steamapi/hsteampipe)
- **eAccountType**: [EAccountType](/docs/api/shared/steamapi/eaccounttype)

#### Returns

- [HSteamUser](/docs/api/shared/steamapi/hsteamuser)

### CreateSteamPipe()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverclient.cs#L10)

```csharp
public static HSteamPipe CreateSteamPipe()
```

#### Returns

- [HSteamPipe](/docs/api/shared/steamapi/hsteampipe)

### GetIPCCallCount()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverclient.cs#L207)

```csharp
public static uint GetIPCCallCount()
```

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetISteamApps(HSteamUser, HSteamPipe, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverclient.cs#L154)

```csharp
public static nint GetISteamApps(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)
```

#### Parameters

- **hSteamUser**: [HSteamUser](/docs/api/shared/steamapi/hsteamuser)
- **hSteamPipe**: [HSteamPipe](/docs/api/shared/steamapi/hsteampipe)
- **pchVersion**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### GetISteamController(HSteamUser, HSteamPipe, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverclient.cs#L244)

```csharp
public static nint GetISteamController(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)
```

#### Parameters

- **hSteamUser**: [HSteamUser](/docs/api/shared/steamapi/hsteamuser)
- **hSteamPipe**: [HSteamPipe](/docs/api/shared/steamapi/hsteampipe)
- **pchVersion**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### GetISteamFriends(HSteamUser, HSteamPipe, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverclient.cs#L84)

```csharp
public static nint GetISteamFriends(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)
```

#### Parameters

- **hSteamUser**: [HSteamUser](/docs/api/shared/steamapi/hsteamuser)
- **hSteamPipe**: [HSteamPipe](/docs/api/shared/steamapi/hsteampipe)
- **pchVersion**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### GetISteamGameSearch(HSteamUser, HSteamPipe, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverclient.cs#L194)

```csharp
public static nint GetISteamGameSearch(HSteamUser hSteamuser, HSteamPipe hSteamPipe, string pchVersion)
```

#### Parameters

- **hSteamuser**: [HSteamUser](/docs/api/shared/steamapi/hsteamuser)
- **hSteamPipe**: [HSteamPipe](/docs/api/shared/steamapi/hsteampipe)
- **pchVersion**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### GetISteamGameServer(HSteamUser, HSteamPipe, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverclient.cs#L65)

```csharp
public static nint GetISteamGameServer(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)
```

#### Parameters

- **hSteamUser**: [HSteamUser](/docs/api/shared/steamapi/hsteamuser)
- **hSteamPipe**: [HSteamPipe](/docs/api/shared/steamapi/hsteampipe)
- **pchVersion**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### GetISteamGameServerStats(HSteamUser, HSteamPipe, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverclient.cs#L144)

```csharp
public static nint GetISteamGameServerStats(HSteamUser hSteamuser, HSteamPipe hSteamPipe, string pchVersion)
```

#### Parameters

- **hSteamuser**: [HSteamUser](/docs/api/shared/steamapi/hsteamuser)
- **hSteamPipe**: [HSteamPipe](/docs/api/shared/steamapi/hsteampipe)
- **pchVersion**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### GetISteamGenericInterface(HSteamUser, HSteamPipe, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverclient.cs#L124)

```csharp
public static nint GetISteamGenericInterface(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)
```

#### Parameters

- **hSteamUser**: [HSteamUser](/docs/api/shared/steamapi/hsteamuser)
- **hSteamPipe**: [HSteamPipe](/docs/api/shared/steamapi/hsteampipe)
- **pchVersion**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### GetISteamHTMLSurface(HSteamUser, HSteamPipe, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverclient.cs#L284)

```csharp
public static nint GetISteamHTMLSurface(HSteamUser hSteamuser, HSteamPipe hSteamPipe, string pchVersion)
```

#### Parameters

- **hSteamuser**: [HSteamUser](/docs/api/shared/steamapi/hsteamuser)
- **hSteamPipe**: [HSteamPipe](/docs/api/shared/steamapi/hsteampipe)
- **pchVersion**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### GetISteamHTTP(HSteamUser, HSteamPipe, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverclient.cs#L234)

```csharp
public static nint GetISteamHTTP(HSteamUser hSteamuser, HSteamPipe hSteamPipe, string pchVersion)
```

#### Parameters

- **hSteamuser**: [HSteamUser](/docs/api/shared/steamapi/hsteamuser)
- **hSteamPipe**: [HSteamPipe](/docs/api/shared/steamapi/hsteampipe)
- **pchVersion**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### GetISteamInput(HSteamUser, HSteamPipe, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverclient.cs#L324)

```csharp
public static nint GetISteamInput(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)
```

#### Parameters

- **hSteamUser**: [HSteamUser](/docs/api/shared/steamapi/hsteamuser)
- **hSteamPipe**: [HSteamPipe](/docs/api/shared/steamapi/hsteampipe)
- **pchVersion**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### GetISteamInventory(HSteamUser, HSteamPipe, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverclient.cs#L294)

```csharp
public static nint GetISteamInventory(HSteamUser hSteamuser, HSteamPipe hSteamPipe, string pchVersion)
```

#### Parameters

- **hSteamuser**: [HSteamUser](/docs/api/shared/steamapi/hsteamuser)
- **hSteamPipe**: [HSteamPipe](/docs/api/shared/steamapi/hsteampipe)
- **pchVersion**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### GetISteamMatchmaking(HSteamUser, HSteamPipe, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverclient.cs#L104)

```csharp
public static nint GetISteamMatchmaking(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)
```

#### Parameters

- **hSteamUser**: [HSteamUser](/docs/api/shared/steamapi/hsteamuser)
- **hSteamPipe**: [HSteamPipe](/docs/api/shared/steamapi/hsteampipe)
- **pchVersion**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### GetISteamMatchmakingServers(HSteamUser, HSteamPipe, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverclient.cs#L114)

```csharp
public static nint GetISteamMatchmakingServers(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)
```

#### Parameters

- **hSteamUser**: [HSteamUser](/docs/api/shared/steamapi/hsteamuser)
- **hSteamPipe**: [HSteamPipe](/docs/api/shared/steamapi/hsteampipe)
- **pchVersion**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### GetISteamMusic(HSteamUser, HSteamPipe, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverclient.cs#L264)

```csharp
public static nint GetISteamMusic(HSteamUser hSteamuser, HSteamPipe hSteamPipe, string pchVersion)
```

#### Parameters

- **hSteamuser**: [HSteamUser](/docs/api/shared/steamapi/hsteamuser)
- **hSteamPipe**: [HSteamPipe](/docs/api/shared/steamapi/hsteampipe)
- **pchVersion**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### GetISteamMusicRemote(HSteamUser, HSteamPipe, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverclient.cs#L274)

```csharp
public static nint GetISteamMusicRemote(HSteamUser hSteamuser, HSteamPipe hSteamPipe, string pchVersion)
```

#### Parameters

- **hSteamuser**: [HSteamUser](/docs/api/shared/steamapi/hsteamuser)
- **hSteamPipe**: [HSteamPipe](/docs/api/shared/steamapi/hsteampipe)
- **pchVersion**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### GetISteamNetworking(HSteamUser, HSteamPipe, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverclient.cs#L164)

```csharp
public static nint GetISteamNetworking(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)
```

#### Parameters

- **hSteamUser**: [HSteamUser](/docs/api/shared/steamapi/hsteamuser)
- **hSteamPipe**: [HSteamPipe](/docs/api/shared/steamapi/hsteampipe)
- **pchVersion**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### GetISteamParentalSettings(HSteamUser, HSteamPipe, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverclient.cs#L314)

```csharp
public static nint GetISteamParentalSettings(HSteamUser hSteamuser, HSteamPipe hSteamPipe, string pchVersion)
```

#### Parameters

- **hSteamuser**: [HSteamUser](/docs/api/shared/steamapi/hsteamuser)
- **hSteamPipe**: [HSteamPipe](/docs/api/shared/steamapi/hsteampipe)
- **pchVersion**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### GetISteamParties(HSteamUser, HSteamPipe, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverclient.cs#L334)

```csharp
public static nint GetISteamParties(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)
```

#### Parameters

- **hSteamUser**: [HSteamUser](/docs/api/shared/steamapi/hsteamuser)
- **hSteamPipe**: [HSteamPipe](/docs/api/shared/steamapi/hsteampipe)
- **pchVersion**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### GetISteamRemotePlay(HSteamUser, HSteamPipe, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverclient.cs#L344)

```csharp
public static nint GetISteamRemotePlay(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)
```

#### Parameters

- **hSteamUser**: [HSteamUser](/docs/api/shared/steamapi/hsteamuser)
- **hSteamPipe**: [HSteamPipe](/docs/api/shared/steamapi/hsteampipe)
- **pchVersion**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### GetISteamRemoteStorage(HSteamUser, HSteamPipe, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverclient.cs#L174)

```csharp
public static nint GetISteamRemoteStorage(HSteamUser hSteamuser, HSteamPipe hSteamPipe, string pchVersion)
```

#### Parameters

- **hSteamuser**: [HSteamUser](/docs/api/shared/steamapi/hsteamuser)
- **hSteamPipe**: [HSteamPipe](/docs/api/shared/steamapi/hsteampipe)
- **pchVersion**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### GetISteamScreenshots(HSteamUser, HSteamPipe, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverclient.cs#L184)

```csharp
public static nint GetISteamScreenshots(HSteamUser hSteamuser, HSteamPipe hSteamPipe, string pchVersion)
```

#### Parameters

- **hSteamuser**: [HSteamUser](/docs/api/shared/steamapi/hsteamuser)
- **hSteamPipe**: [HSteamPipe](/docs/api/shared/steamapi/hsteampipe)
- **pchVersion**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### GetISteamUGC(HSteamUser, HSteamPipe, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverclient.cs#L254)

```csharp
public static nint GetISteamUGC(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)
```

#### Parameters

- **hSteamUser**: [HSteamUser](/docs/api/shared/steamapi/hsteamuser)
- **hSteamPipe**: [HSteamPipe](/docs/api/shared/steamapi/hsteampipe)
- **pchVersion**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### GetISteamUser(HSteamUser, HSteamPipe, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverclient.cs#L55)

```csharp
public static nint GetISteamUser(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)
```

#### Parameters

- **hSteamUser**: [HSteamUser](/docs/api/shared/steamapi/hsteamuser)
- **hSteamPipe**: [HSteamPipe](/docs/api/shared/steamapi/hsteampipe)
- **pchVersion**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### GetISteamUserStats(HSteamUser, HSteamPipe, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverclient.cs#L134)

```csharp
public static nint GetISteamUserStats(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)
```

#### Parameters

- **hSteamUser**: [HSteamUser](/docs/api/shared/steamapi/hsteamuser)
- **hSteamPipe**: [HSteamPipe](/docs/api/shared/steamapi/hsteampipe)
- **pchVersion**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### GetISteamUtils(HSteamPipe, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverclient.cs#L94)

```csharp
public static nint GetISteamUtils(HSteamPipe hSteamPipe, string pchVersion)
```

#### Parameters

- **hSteamPipe**: [HSteamPipe](/docs/api/shared/steamapi/hsteampipe)
- **pchVersion**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### GetISteamVideo(HSteamUser, HSteamPipe, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverclient.cs#L304)

```csharp
public static nint GetISteamVideo(HSteamUser hSteamuser, HSteamPipe hSteamPipe, string pchVersion)
```

#### Parameters

- **hSteamuser**: [HSteamUser](/docs/api/shared/steamapi/hsteamuser)
- **hSteamPipe**: [HSteamPipe](/docs/api/shared/steamapi/hsteampipe)
- **pchVersion**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### ReleaseUser(HSteamPipe, HSteamUser)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverclient.cs#L47)

```csharp
public static void ReleaseUser(HSteamPipe hSteamPipe, HSteamUser hUser)
```

#### Parameters

- **hSteamPipe**: [HSteamPipe](/docs/api/shared/steamapi/hsteampipe)
- **hUser**: [HSteamUser](/docs/api/shared/steamapi/hsteamuser)

### SetLocalIPBinding(ref SteamIPAddress_t, ushort)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverclient.cs#L76)

```csharp
public static void SetLocalIPBinding(ref SteamIPAddress_t unIP, ushort usPort)
```

#### Parameters

- **unIP**: [SteamIPAddress_t](/docs/api/shared/steamapi/steamipaddress_t)
- **usPort**: [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### SetWarningMessageHook(SteamAPIWarningMessageHook_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverclient.cs#L218)

```csharp
public static void SetWarningMessageHook(SteamAPIWarningMessageHook_t pFunction)
```

#### Parameters

- **pFunction**: [SteamAPIWarningMessageHook_t](/docs/api/shared/steamapi/steamapiwarningmessagehook_t)

