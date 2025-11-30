---
title: CPlayerInputAnimMotorUpdater
---

# Interface CPlayerInputAnimMotorUpdater

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerInputAnimMotorUpdater.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CPlayerInputAnimMotorUpdater : CAnimMotorUpdaterBase, ISchemaClass<CAnimMotorUpdaterBase>, ISchemaClass<CPlayerInputAnimMotorUpdater>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CAnimMotorUpdaterBase](/docs/api/schemadefinitions/canimmotorupdaterbase)
- [ISchemaClass<CAnimMotorUpdaterBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPlayerInputAnimMotorUpdater>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AnticipationDistance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerInputAnimMotorUpdater.cs#L22)

```csharp
ref float AnticipationDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AnticipationHeadingParam

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerInputAnimMotorUpdater.cs#L26)

```csharp
CAnimParamHandle AnticipationHeadingParam { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/schemadefinitions/canimparamhandle)

### AnticipationPosParam

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerInputAnimMotorUpdater.cs#L24)

```csharp
CAnimParamHandle AnticipationPosParam { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/schemadefinitions/canimparamhandle)

### SampleTimes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerInputAnimMotorUpdater.cs#L18)

```csharp
ref CUtlVector<float> SampleTimes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### SpringConstant

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerInputAnimMotorUpdater.cs#L20)

```csharp
ref float SpringConstant { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### UseAcceleration

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerInputAnimMotorUpdater.cs#L28)

```csharp
ref bool UseAcceleration { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

