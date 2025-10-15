---
title: CPhysHinge
---

```csharp
public interface CPhysHinge : CPhysConstraint, CLogicalEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CLogicalEntity>, ISchemaClass<CPhysConstraint>, ISchemaClass<CPhysHinge>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AngleSpeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysHinge.cs#L45)

```csharp
ref float AngleSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AngleSpeedThreshold

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysHinge.cs#L47)

```csharp
ref float AngleSpeedThreshold { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AtMaxLimit

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysHinge.cs#L25)

```csharp
ref bool AtMaxLimit { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AtMinLimit

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysHinge.cs#L23)

```csharp
ref bool AtMinLimit { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Hinge

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysHinge.cs#L27)

```csharp
constraint_hingeparams_t Hinge { get; }
```

#### Property Value

- [constraint_hingeparams_t](/docs/api/shared/schemadefinitions/constraint_hingeparams_t)

### HingeFriction

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysHinge.cs#L29)

```csharp
ref float HingeFriction { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### InitialRotation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysHinge.cs#L39)

```csharp
ref float InitialRotation { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### IsAxisLocal

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysHinge.cs#L33)

```csharp
ref bool IsAxisLocal { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MaxRotation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysHinge.cs#L37)

```csharp
ref float MaxRotation { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MinRotation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysHinge.cs#L35)

```csharp
ref float MinRotation { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MotorDampingRatio

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysHinge.cs#L43)

```csharp
ref float MotorDampingRatio { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MotorFrequency

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysHinge.cs#L41)

```csharp
ref float MotorFrequency { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### NotifyMaxLimitReached

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysHinge.cs#L21)

```csharp
CEntityIOOutput NotifyMaxLimitReached { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### NotifyMinLimitReached

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysHinge.cs#L19)

```csharp
CEntityIOOutput NotifyMinLimitReached { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnStartMoving

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysHinge.cs#L49)

```csharp
CEntityIOOutput OnStartMoving { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnStopMoving

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysHinge.cs#L51)

```csharp
CEntityIOOutput OnStopMoving { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### SoundInfo

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysHinge.cs#L17)

```csharp
ConstraintSoundInfo SoundInfo { get; }
```

#### Property Value

- [ConstraintSoundInfo](/docs/api/shared/schemadefinitions/constraintsoundinfo)

### SystemLoadScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysHinge.cs#L31)

```csharp
ref float SystemLoadScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

