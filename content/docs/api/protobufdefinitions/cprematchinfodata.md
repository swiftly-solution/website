---
title: CPreMatchInfoData
---

# Interface CPreMatchInfoData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CPreMatchInfoData.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CPreMatchInfoData : ITypedProtobuf<CPreMatchInfoData>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CPreMatchInfoData>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Draft

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CPreMatchInfoData.cs#L16)

```csharp
CDataGCCStrike15_v2_TournamentMatchDraft Draft { get; }
```

#### Property Value

- [CDataGCCStrike15_v2_TournamentMatchDraft](/docs/api/protobufdefinitions/cdatagccstrike15_v2_tournamentmatchdraft)

### PredictionsPct

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CPreMatchInfoData.cs#L13)

```csharp
int PredictionsPct { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Stats

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CPreMatchInfoData.cs#L19)

```csharp
IProtobufRepeatedFieldSubMessageType<CPreMatchInfoData_TeamStats> Stats { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CPreMatchInfoData_TeamStats](/docs/api/protobufdefinitions/cprematchinfodata_teamstats)>

### Wins

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CPreMatchInfoData.cs#L22)

```csharp
IProtobufRepeatedFieldValueType<int> Wins { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

