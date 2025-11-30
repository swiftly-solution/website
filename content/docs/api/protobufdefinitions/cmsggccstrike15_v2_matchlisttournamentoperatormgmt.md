---
title: CMsgGCCStrike15_v2_MatchListTournamentOperatorMgmt
---

# Interface CMsgGCCStrike15_v2_MatchListTournamentOperatorMgmt

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchListTournamentOperatorMgmt.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgGCCStrike15_v2_MatchListTournamentOperatorMgmt : ITypedProtobuf<CMsgGCCStrike15_v2_MatchListTournamentOperatorMgmt>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CMsgGCCStrike15_v2_MatchListTournamentOperatorMgmt>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Accountid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchListTournamentOperatorMgmt.cs#L19)

```csharp
uint Accountid { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Eventid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchListTournamentOperatorMgmt.cs#L13)

```csharp
int Eventid { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Matches

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchListTournamentOperatorMgmt.cs#L16)

```csharp
IProtobufRepeatedFieldSubMessageType<CDataGCCStrike15_v2_MatchInfo> Matches { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CDataGCCStrike15_v2_MatchInfo](/docs/api/protobufdefinitions/cdatagccstrike15_v2_matchinfo)>

