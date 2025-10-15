---
title: CSplineConstraint
---

```csharp
public interface CSplineConstraint : CPhysConstraint, CLogicalEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CLogicalEntity>, ISchemaClass<CPhysConstraint>, ISchemaClass<CSplineConstraint>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AnchorOffsetRestore

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSplineConstraint.cs#L17)

```csharp
ref Vector AnchorOffsetRestore { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### EnableAngularConstraint

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSplineConstraint.cs#L25)

```csharp
ref bool EnableAngularConstraint { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EnableLateralConstraint

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSplineConstraint.cs#L21)

```csharp
ref bool EnableLateralConstraint { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EnableLimit

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSplineConstraint.cs#L27)

```csharp
ref bool EnableLimit { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EnableVerticalConstraint

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSplineConstraint.cs#L23)

```csharp
ref bool EnableVerticalConstraint { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FireEventsOnPath

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSplineConstraint.cs#L29)

```csharp
ref bool FireEventsOnPath { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### JointFriction

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSplineConstraint.cs#L35)

```csharp
ref float JointFriction { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LinarDampingRatio

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSplineConstraint.cs#L33)

```csharp
ref float LinarDampingRatio { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LinearFrequency

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSplineConstraint.cs#L31)

```csharp
ref float LinearFrequency { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PreSolveAnchorPos

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSplineConstraint.cs#L39)

```csharp
ref Vector PreSolveAnchorPos { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### SplineEntity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSplineConstraint.cs#L19)

```csharp
ref CHandle<CBaseEntity> SplineEntity { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### StartTransitionTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSplineConstraint.cs#L41)

```csharp
GameTime_t StartTransitionTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### TangentSpaceAnchorAtTransitionStart

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSplineConstraint.cs#L43)

```csharp
ref Vector TangentSpaceAnchorAtTransitionStart { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### TransitionTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSplineConstraint.cs#L37)

```csharp
ref float TransitionTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

