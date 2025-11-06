---
title: GameServer
---

```csharp
public static class GameServer
```

#### Inheritance

#### Inherited Members

## Methods

### BSecure()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L182)

```csharp
public static bool BSecure()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetHSteamPipe()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L194)

```csharp
public static HSteamPipe GetHSteamPipe()
```

#### Returns

- [HSteamPipe](/docs/api/shared/steamapi/hsteampipe)

### GetHSteamUser()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L200)

```csharp
public static HSteamUser GetHSteamUser()
```

#### Returns

- [HSteamUser](/docs/api/shared/steamapi/hsteamuser)

### GetSteamID()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L188)

```csharp
public static CSteamID GetSteamID()
```

#### Returns

- [CSteamID](/docs/api/shared/steamapi/csteamid)

### Init(uint, ushort, ushort, EServerMode, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L152)

```csharp
public static bool Init(uint unIP, ushort usGamePort, ushort usQueryPort, EServerMode eServerMode, string pchVersionString)
```

#### Parameters

- **unIP**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **usGamePort**: [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)
- **usQueryPort**: [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)
- **eServerMode**: [EServerMode](/docs/api/shared/steamapi/eservermode)
- **pchVersionString**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ReleaseCurrentThreadMemory()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L176)

```csharp
public static void ReleaseCurrentThreadMemory()
```

### RunCallbacks()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L165)

```csharp
public static void RunCallbacks()
```

### Shutdown()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L158)

```csharp
public static void Shutdown()
```

