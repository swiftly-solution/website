---
title: CDataGCCStrike15_v2_TournamentInfo
---

# Interface CDataGCCStrike15_v2_TournamentInfo

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_TournamentInfo.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CDataGCCStrike15_v2_TournamentInfo : ITypedProtobuf<CDataGCCStrike15_v2_TournamentInfo>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CDataGCCStrike15_v2_TournamentInfo>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Sections

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_TournamentInfo.cs#L13)

```csharp
IProtobufRepeatedFieldSubMessageType<CDataGCCStrike15_v2_TournamentSection> Sections { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CDataGCCStrike15_v2_TournamentSection](/docs/api/protobufdefinitions/cdatagccstrike15_v2_tournamentsection)>

### TournamentEvent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_TournamentInfo.cs#L16)

```csharp
TournamentEvent TournamentEvent { get; }
```

#### Property Value

- [TournamentEvent](/docs/api/protobufdefinitions/tournamentevent)

### TournamentTeams

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_TournamentInfo.cs#L19)

```csharp
IProtobufRepeatedFieldSubMessageType<TournamentTeam> TournamentTeams { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[TournamentTeam](/docs/api/protobufdefinitions/tournamentteam)>

