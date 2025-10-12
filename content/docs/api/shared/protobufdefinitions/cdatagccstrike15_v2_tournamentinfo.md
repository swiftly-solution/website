---
title: CDataGCCStrike15_v2_TournamentInfo
---

```csharp
public interface CDataGCCStrike15_v2_TournamentInfo : ITypedProtobuf<CDataGCCStrike15_v2_TournamentInfo>, INativeHandle
```

- Implements

## Properties

### **Sections** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_TournamentInfo.cs#L13)

```csharp
IProtobufRepeatedFieldSubMessageType<CDataGCCStrike15_v2_TournamentSection> Sections { get; }
```

- Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CDataGCCStrike15_v2_TournamentSection](/docs/api/shared/protobufdefinitions/cdatagccstrike15_v2_tournamentsection)>

### **TournamentEvent** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_TournamentInfo.cs#L16)

```csharp
TournamentEvent TournamentEvent { get; }
```

- Property Value

- [TournamentEvent](/docs/api/shared/protobufdefinitions/tournamentevent)

### **TournamentTeams** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_TournamentInfo.cs#L19)

```csharp
IProtobufRepeatedFieldSubMessageType<TournamentTeam> TournamentTeams { get; }
```

- Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[TournamentTeam](/docs/api/shared/protobufdefinitions/tournamentteam)>

