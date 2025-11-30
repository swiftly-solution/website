---
title: CDampedPathAnimMotorUpdater
---

# Interface CDampedPathAnimMotorUpdater

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDampedPathAnimMotorUpdater.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CDampedPathAnimMotorUpdater : CPathAnimMotorUpdaterBase, CAnimMotorUpdaterBase, ISchemaClass<CAnimMotorUpdaterBase>, ISchemaClass<CPathAnimMotorUpdaterBase>, ISchemaClass<CDampedPathAnimMotorUpdater>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CPathAnimMotorUpdaterBase](/docs/api/schemadefinitions/cpathanimmotorupdaterbase)
- [CAnimMotorUpdaterBase](/docs/api/schemadefinitions/canimmotorupdaterbase)
- [ISchemaClass<CAnimMotorUpdaterBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPathAnimMotorUpdaterBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CDampedPathAnimMotorUpdater>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AnticipationHeadingParam

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDampedPathAnimMotorUpdater.cs#L24)

```csharp
CAnimParamHandle AnticipationHeadingParam { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/schemadefinitions/canimparamhandle)

### AnticipationPosParam

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDampedPathAnimMotorUpdater.cs#L22)

```csharp
CAnimParamHandle AnticipationPosParam { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/schemadefinitions/canimparamhandle)

### AnticipationTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDampedPathAnimMotorUpdater.cs#L18)

```csharp
ref float AnticipationTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MaxSpringTension

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDampedPathAnimMotorUpdater.cs#L30)

```csharp
ref float MaxSpringTension { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MinSpeedScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDampedPathAnimMotorUpdater.cs#L20)

```csharp
ref float MinSpeedScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MinSpringTension

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDampedPathAnimMotorUpdater.cs#L28)

```csharp
ref float MinSpringTension { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SpringConstant

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDampedPathAnimMotorUpdater.cs#L26)

```csharp
ref float SpringConstant { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

