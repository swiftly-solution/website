---
title: CMsgGCCStrike15_v2_ClientCommendPlayer
---

# Interface CMsgGCCStrike15_v2_ClientCommendPlayer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_ClientCommendPlayer.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgGCCStrike15_v2_ClientCommendPlayer : ITypedProtobuf<CMsgGCCStrike15_v2_ClientCommendPlayer>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CMsgGCCStrike15_v2_ClientCommendPlayer>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AccountId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_ClientCommendPlayer.cs#L13)

```csharp
uint AccountId { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Commendation

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_ClientCommendPlayer.cs#L19)

```csharp
PlayerCommendationInfo Commendation { get; }
```

#### Property Value

- [PlayerCommendationInfo](/docs/api/protobufdefinitions/playercommendationinfo)

### MatchId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_ClientCommendPlayer.cs#L16)

```csharp
ulong MatchId { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### Tokens

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_ClientCommendPlayer.cs#L22)

```csharp
uint Tokens { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

