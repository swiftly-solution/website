---
title: CSplineConstraint
---

```csharp
public interface CSplineConstraint : CPhysConstraint, CLogicalEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CLogicalEntity>, ISchemaClass<CPhysConstraint>, ISchemaClass<CSplineConstraint>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**AnchorOffsetRestore** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSplineConstraint.cs#L16)

```csharp
ref Vector AnchorOffsetRestore { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**EnableAngularConstraint** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSplineConstraint.cs#L24)

```csharp
ref bool EnableAngularConstraint { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**EnableLateralConstraint** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSplineConstraint.cs#L20)

```csharp
ref bool EnableLateralConstraint { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**EnableLimit** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSplineConstraint.cs#L26)

```csharp
ref bool EnableLimit { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**EnableVerticalConstraint** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSplineConstraint.cs#L22)

```csharp
ref bool EnableVerticalConstraint { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**FireEventsOnPath** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSplineConstraint.cs#L28)

```csharp
ref bool FireEventsOnPath { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**JointFriction** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSplineConstraint.cs#L34)

```csharp
ref float JointFriction { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**LinarDampingRatio** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSplineConstraint.cs#L32)

```csharp
ref float LinarDampingRatio { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**LinearFrequency** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSplineConstraint.cs#L30)

```csharp
ref float LinearFrequency { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**PreSolveAnchorPos** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSplineConstraint.cs#L36)

```csharp
ref Vector PreSolveAnchorPos { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**SplineEntity** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSplineConstraint.cs#L18)

```csharp
ref CHandle<CBaseEntity> SplineEntity { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

