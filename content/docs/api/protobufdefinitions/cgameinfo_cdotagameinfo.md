---
title: CGameInfo_CDotaGameInfo
---

# Interface CGameInfo_CDotaGameInfo

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CGameInfo_CDotaGameInfo.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CGameInfo_CDotaGameInfo : ITypedProtobuf<CGameInfo_CDotaGameInfo>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CGameInfo_CDotaGameInfo>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### DireTeamId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CGameInfo_CDotaGameInfo.cs#L34)

```csharp
uint DireTeamId { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### DireTeamTag

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CGameInfo_CDotaGameInfo.cs#L40)

```csharp
string DireTeamTag { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### EndTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CGameInfo_CDotaGameInfo.cs#L43)

```csharp
uint EndTime { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GameMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CGameInfo_CDotaGameInfo.cs#L16)

```csharp
int GameMode { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GameWinner

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CGameInfo_CDotaGameInfo.cs#L19)

```csharp
int GameWinner { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Leagueid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CGameInfo_CDotaGameInfo.cs#L25)

```csharp
uint Leagueid { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### MatchId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CGameInfo_CDotaGameInfo.cs#L13)

```csharp
ulong MatchId { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### PicksBans

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CGameInfo_CDotaGameInfo.cs#L28)

```csharp
IProtobufRepeatedFieldSubMessageType<CGameInfo_CDotaGameInfo_CHeroSelectEvent> PicksBans { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CGameInfo_CDotaGameInfo_CHeroSelectEvent](/docs/api/protobufdefinitions/cgameinfo_cdotagameinfo_cheroselectevent)>

### PlayerInfo

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CGameInfo_CDotaGameInfo.cs#L22)

```csharp
IProtobufRepeatedFieldSubMessageType<CGameInfo_CDotaGameInfo_CPlayerInfo> PlayerInfo { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CGameInfo_CDotaGameInfo_CPlayerInfo](/docs/api/protobufdefinitions/cgameinfo_cdotagameinfo_cplayerinfo)>

### RadiantTeamId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CGameInfo_CDotaGameInfo.cs#L31)

```csharp
uint RadiantTeamId { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### RadiantTeamTag

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CGameInfo_CDotaGameInfo.cs#L37)

```csharp
string RadiantTeamTag { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

