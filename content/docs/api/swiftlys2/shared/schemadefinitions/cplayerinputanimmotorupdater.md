---
title: CPlayerInputAnimMotorUpdater
---

```csharp
public interface CPlayerInputAnimMotorUpdater : CAnimMotorUpdaterBase, ISchemaClass<CAnimMotorUpdaterBase>, ISchemaClass<CPlayerInputAnimMotorUpdater>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**AnticipationDistance** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerInputAnimMotorUpdater.cs#L20)

```csharp
ref float AnticipationDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**AnticipationHeadingParam** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerInputAnimMotorUpdater.cs#L24)

```csharp
CAnimParamHandle AnticipationHeadingParam { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

**AnticipationPosParam** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerInputAnimMotorUpdater.cs#L22)

```csharp
CAnimParamHandle AnticipationPosParam { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

**SampleTimes** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerInputAnimMotorUpdater.cs#L16)

```csharp
ref CUtlVector<float> SampleTimes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

**SpringConstant** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerInputAnimMotorUpdater.cs#L18)

```csharp
ref float SpringConstant { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**UseAcceleration** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerInputAnimMotorUpdater.cs#L26)

```csharp
ref bool UseAcceleration { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

