---
title: CSGOUserCmdPB
---

# Interface CSGOUserCmdPB

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOUserCmdPB.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSGOUserCmdPB : ITypedProtobuf<CSGOUserCmdPB>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CSGOUserCmdPB>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Attack1StartHistoryIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOUserCmdPB.cs#L19)

```csharp
int Attack1StartHistoryIndex { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Attack2StartHistoryIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOUserCmdPB.cs#L22)

```csharp
int Attack2StartHistoryIndex { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Base

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOUserCmdPB.cs#L13)

```csharp
CBaseUserCmdPB Base { get; }
```

#### Property Value

- [CBaseUserCmdPB](/docs/api/protobufdefinitions/cbaseusercmdpb)

### InputHistory

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOUserCmdPB.cs#L16)

```csharp
IProtobufRepeatedFieldSubMessageType<CSGOInputHistoryEntryPB> InputHistory { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CSGOInputHistoryEntryPB](/docs/api/protobufdefinitions/csgoinputhistoryentrypb)>

### IsPredictingBodyShotFx

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOUserCmdPB.cs#L28)

```csharp
bool IsPredictingBodyShotFx { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsPredictingHeadShotFx

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOUserCmdPB.cs#L31)

```csharp
bool IsPredictingHeadShotFx { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsPredictingKillRagdolls

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOUserCmdPB.cs#L34)

```csharp
bool IsPredictingKillRagdolls { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LeftHandDesired

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOUserCmdPB.cs#L25)

```csharp
bool LeftHandDesired { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

