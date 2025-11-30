---
title: gameserveritem_t
---

# Class gameserveritem_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/gameserveritem_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SteamAPI](/docs/api/steamapi)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
[Serializable]
public class gameserveritem_t
```

#### Inheritance

- [object](https://learn.microsoft.com/dotnet/api/system.object)
- [gameserveritem_t](/docs/api/steamapi/gameserveritem_t)

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### m_NetAdr

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/gameserveritem_t.cs#L69)

```csharp
public servernetadr_t m_NetAdr
```

#### Field Value

- [servernetadr_t](/docs/api/steamapi/servernetadr_t)

### m_bDoNotRefresh

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/gameserveritem_t.cs#L74)

```csharp
public bool m_bDoNotRefresh
```

#### Field Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### m_bHadSuccessfulResponse

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/gameserveritem_t.cs#L72)

```csharp
public bool m_bHadSuccessfulResponse
```

#### Field Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### m_bPassword

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/gameserveritem_t.cs#L86)

```csharp
public bool m_bPassword
```

#### Field Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### m_bSecure

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/gameserveritem_t.cs#L88)

```csharp
public bool m_bSecure
```

#### Field Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### m_nAppID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/gameserveritem_t.cs#L81)

```csharp
public uint m_nAppID
```

#### Field Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### m_nBotPlayers

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/gameserveritem_t.cs#L84)

```csharp
public int m_nBotPlayers
```

#### Field Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### m_nMaxPlayers

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/gameserveritem_t.cs#L83)

```csharp
public int m_nMaxPlayers
```

#### Field Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### m_nPing

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/gameserveritem_t.cs#L70)

```csharp
public int m_nPing
```

#### Field Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### m_nPlayers

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/gameserveritem_t.cs#L82)

```csharp
public int m_nPlayers
```

#### Field Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### m_nServerVersion

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/gameserveritem_t.cs#L90)

```csharp
public int m_nServerVersion
```

#### Field Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### m_steamID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/gameserveritem_t.cs#L101)

```csharp
public CSteamID m_steamID
```

#### Field Value

- [CSteamID](/docs/api/steamapi/csteamid)

### m_ulTimeLastPlayed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/gameserveritem_t.cs#L89)

```csharp
public uint m_ulTimeLastPlayed
```

#### Field Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Methods

### GetGameDescription()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/gameserveritem_t.cs#L35)

```csharp
public string GetGameDescription()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetGameDir()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/gameserveritem_t.cs#L15)

```csharp
public string GetGameDir()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetGameTags()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/gameserveritem_t.cs#L59)

```csharp
public string GetGameTags()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetMap()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/gameserveritem_t.cs#L25)

```csharp
public string GetMap()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetServerName()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/gameserveritem_t.cs#L45)

```csharp
public string GetServerName()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### SetGameDescription(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/gameserveritem_t.cs#L40)

```csharp
public void SetGameDescription(string desc)
```

#### Parameters

- **desc**: [string](https://learn.microsoft.com/dotnet/api/system.string)

### SetGameDir(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/gameserveritem_t.cs#L20)

```csharp
public void SetGameDir(string dir)
```

#### Parameters

- **dir**: [string](https://learn.microsoft.com/dotnet/api/system.string)

### SetGameTags(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/gameserveritem_t.cs#L64)

```csharp
public void SetGameTags(string tags)
```

#### Parameters

- **tags**: [string](https://learn.microsoft.com/dotnet/api/system.string)

### SetMap(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/gameserveritem_t.cs#L30)

```csharp
public void SetMap(string map)
```

#### Parameters

- **map**: [string](https://learn.microsoft.com/dotnet/api/system.string)

### SetServerName(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/gameserveritem_t.cs#L54)

```csharp
public void SetServerName(string name)
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string)

