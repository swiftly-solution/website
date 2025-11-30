---
title: CDataGCCStrike15_v2_TournamentMatchDraft
---

# Interface CDataGCCStrike15_v2_TournamentMatchDraft

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_TournamentMatchDraft.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CDataGCCStrike15_v2_TournamentMatchDraft : ITypedProtobuf<CDataGCCStrike15_v2_TournamentMatchDraft>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CDataGCCStrike15_v2_TournamentMatchDraft>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Drafts

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_TournamentMatchDraft.cs#L40)

```csharp
IProtobufRepeatedFieldSubMessageType<CDataGCCStrike15_v2_TournamentMatchDraft_Entry> Drafts { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CDataGCCStrike15_v2_TournamentMatchDraft_Entry](/docs/api/protobufdefinitions/cdatagccstrike15_v2_tournamentmatchdraft_entry)>

### EventId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_TournamentMatchDraft.cs#L13)

```csharp
int EventId { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### EventStageId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_TournamentMatchDraft.cs#L16)

```csharp
int EventStageId { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MapsCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_TournamentMatchDraft.cs#L25)

```csharp
int MapsCount { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MapsCurrent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_TournamentMatchDraft.cs#L28)

```csharp
int MapsCurrent { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TeamId0

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_TournamentMatchDraft.cs#L19)

```csharp
int TeamId0 { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TeamId1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_TournamentMatchDraft.cs#L22)

```csharp
int TeamId1 { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TeamIdPickn

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_TournamentMatchDraft.cs#L37)

```csharp
int TeamIdPickn { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TeamIdStart

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_TournamentMatchDraft.cs#L31)

```csharp
int TeamIdStart { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TeamIdVeto1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_TournamentMatchDraft.cs#L34)

```csharp
int TeamIdVeto1 { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### VoteMapid0

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_TournamentMatchDraft.cs#L43)

```csharp
IProtobufRepeatedFieldValueType<int> VoteMapid0 { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### VoteMapid1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_TournamentMatchDraft.cs#L46)

```csharp
IProtobufRepeatedFieldValueType<int> VoteMapid1 { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### VoteMapid2

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_TournamentMatchDraft.cs#L49)

```csharp
IProtobufRepeatedFieldValueType<int> VoteMapid2 { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### VoteMapid3

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_TournamentMatchDraft.cs#L52)

```csharp
IProtobufRepeatedFieldValueType<int> VoteMapid3 { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### VoteMapid4

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_TournamentMatchDraft.cs#L55)

```csharp
IProtobufRepeatedFieldValueType<int> VoteMapid4 { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### VoteMapid5

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_TournamentMatchDraft.cs#L58)

```csharp
IProtobufRepeatedFieldValueType<int> VoteMapid5 { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### VotePhase

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_TournamentMatchDraft.cs#L64)

```csharp
int VotePhase { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### VotePhaseLength

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_TournamentMatchDraft.cs#L70)

```csharp
float VotePhaseLength { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### VotePhaseStart

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_TournamentMatchDraft.cs#L67)

```csharp
float VotePhaseStart { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### VoteStartingSide

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_TournamentMatchDraft.cs#L61)

```csharp
IProtobufRepeatedFieldValueType<int> VoteStartingSide { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

