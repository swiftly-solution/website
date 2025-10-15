---
title: CSGOUserCmdPB
---

```csharp
public interface CSGOUserCmdPB : ITypedProtobuf<CSGOUserCmdPB>, INativeHandle
```

#### Implements

## Properties

### Attack1StartHistoryIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOUserCmdPB.cs#L19)

```csharp
int Attack1StartHistoryIndex { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Attack2StartHistoryIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOUserCmdPB.cs#L22)

```csharp
int Attack2StartHistoryIndex { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Base

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOUserCmdPB.cs#L13)

```csharp
CBaseUserCmdPB Base { get; }
```

#### Property Value

- [CBaseUserCmdPB](/docs/api/shared/protobufdefinitions/cbaseusercmdpb)

### InputHistory

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOUserCmdPB.cs#L16)

```csharp
IProtobufRepeatedFieldSubMessageType<CSGOInputHistoryEntryPB> InputHistory { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CSGOInputHistoryEntryPB](/docs/api/shared/protobufdefinitions/csgoinputhistoryentrypb)>

### IsPredictingBodyShotFx

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOUserCmdPB.cs#L28)

```csharp
bool IsPredictingBodyShotFx { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsPredictingHeadShotFx

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOUserCmdPB.cs#L31)

```csharp
bool IsPredictingHeadShotFx { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsPredictingKillRagdolls

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOUserCmdPB.cs#L34)

```csharp
bool IsPredictingKillRagdolls { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LeftHandDesired

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOUserCmdPB.cs#L25)

```csharp
bool LeftHandDesired { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

