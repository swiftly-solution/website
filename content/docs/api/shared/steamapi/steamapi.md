---
title: SteamAPI
---

```csharp
public static class SteamAPI
```

#### Inheritance

#### Inherited Members

## Methods

### GetHSteamPipe()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L120)

```csharp
public static HSteamPipe GetHSteamPipe()
```

#### Returns

- [HSteamPipe](/docs/api/shared/steamapi/hsteampipe)

### GetHSteamUser()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L126)

```csharp
public static HSteamUser GetHSteamUser()
```

#### Returns

- [HSteamUser](/docs/api/shared/steamapi/hsteamuser)

### Init()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L20)

```csharp
public static bool Init()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsSteamRunning()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L113)

```csharp
public static bool IsSteamRunning()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ReleaseCurrentThreadMemory()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L63)

```csharp
public static void ReleaseCurrentThreadMemory()
```

### RestartAppIfNecessary(AppId_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L53)

```csharp
public static bool RestartAppIfNecessary(AppId_t unOwnAppID)
```

#### Parameters

- **unOwnAppID**: [AppId_t](/docs/api/shared/steamapi/appid_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RunCallbacks()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L100)

```csharp
public static void RunCallbacks()
```

### Shutdown()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L37)

```csharp
public static void Shutdown()
```

