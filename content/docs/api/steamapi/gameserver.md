---
title: GameServer
---

# Class GameServer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L133)

**Namespace**: [SwiftlyS2.Shared.SteamAPI](/docs/api/steamapi)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public static class GameServer
```

#### Inheritance

- [object](https://learn.microsoft.com/dotnet/api/system.object)
- [GameServer](/docs/api/steamapi/gameserver)

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### BSecure()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L182)

```csharp
public static bool BSecure()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetHSteamPipe()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L194)

```csharp
public static HSteamPipe GetHSteamPipe()
```

#### Returns

- [HSteamPipe](/docs/api/steamapi/hsteampipe)

### GetHSteamUser()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L200)

```csharp
public static HSteamUser GetHSteamUser()
```

#### Returns

- [HSteamUser](/docs/api/steamapi/hsteamuser)

### GetSteamID()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L188)

```csharp
public static CSteamID GetSteamID()
```

#### Returns

- [CSteamID](/docs/api/steamapi/csteamid)

### Init(uint, ushort, ushort, EServerMode, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L152)

```csharp
public static bool Init(uint unIP, ushort usGamePort, ushort usQueryPort, EServerMode eServerMode, string pchVersionString)
```

#### Parameters

- **unIP**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **usGamePort**: [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)
- **usQueryPort**: [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)
- **eServerMode**: [EServerMode](/docs/api/steamapi/eservermode)
- **pchVersionString**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ReleaseCurrentThreadMemory()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L176)

```csharp
public static void ReleaseCurrentThreadMemory()
```

### RunCallbacks()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L165)

```csharp
public static void RunCallbacks()
```

### Shutdown()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L158)

```csharp
public static void Shutdown()
```

