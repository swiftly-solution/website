---
title: CPhysSlideConstraint
---

```csharp
public interface CPhysSlideConstraint : CPhysConstraint, CLogicalEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CLogicalEntity>, ISchemaClass<CPhysConstraint>, ISchemaClass<CPhysSlideConstraint>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AxisEnd

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysSlideConstraint.cs#L17)

```csharp
ref Vector AxisEnd { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### EnableAngularConstraint

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysSlideConstraint.cs#L27)

```csharp
ref bool EnableAngularConstraint { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EnableLinearConstraint

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysSlideConstraint.cs#L25)

```csharp
ref bool EnableLinearConstraint { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InitialOffset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysSlideConstraint.cs#L23)

```csharp
ref float InitialOffset { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MotorDampingRatio

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysSlideConstraint.cs#L31)

```csharp
ref float MotorDampingRatio { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MotorFrequency

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysSlideConstraint.cs#L29)

```csharp
ref float MotorFrequency { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SlideFriction

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysSlideConstraint.cs#L19)

```csharp
ref float SlideFriction { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SoundInfo

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysSlideConstraint.cs#L35)

```csharp
ConstraintSoundInfo SoundInfo { get; }
```

#### Property Value

- [ConstraintSoundInfo](/docs/api/shared/schemadefinitions/constraintsoundinfo)

### SystemLoadScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysSlideConstraint.cs#L21)

```csharp
ref float SystemLoadScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### UseEntityPivot

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysSlideConstraint.cs#L33)

```csharp
ref bool UseEntityPivot { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

