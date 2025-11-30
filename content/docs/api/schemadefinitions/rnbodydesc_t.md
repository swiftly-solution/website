---
title: RnBodyDesc_t
---

# Interface RnBodyDesc_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnBodyDesc_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface RnBodyDesc_t : ISchemaClass<RnBodyDesc_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<RnBodyDesc_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AngularBuoyancyDrag

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnBodyDesc_t.cs#L51)

```csharp
ref float AngularBuoyancyDrag { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AngularDamping

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnBodyDesc_t.cs#L43)

```csharp
ref float AngularDamping { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AngularDrag

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnBodyDesc_t.cs#L47)

```csharp
ref float AngularDrag { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AngularVelocity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnBodyDesc_t.cs#L27)

```csharp
ref Vector AngularVelocity { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### BodyType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnBodyDesc_t.cs#L63)

```csharp
ref int BodyType { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### BuoyancyDragEnabled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnBodyDesc_t.cs#L83)

```csharp
ref bool BuoyancyDragEnabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BuoyancyFactor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnBodyDesc_t.cs#L57)

```csharp
ref float BuoyancyFactor { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DebugName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnBodyDesc_t.cs#L18)

```csharp
string DebugName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### DragEnabled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnBodyDesc_t.cs#L81)

```csharp
ref bool DragEnabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DynamicContinuousContactBehavior

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnBodyDesc_t.cs#L91)

```csharp
ref DynamicContinuousContactBehavior_t DynamicContinuousContactBehavior { get; }
```

#### Property Value

- [DynamicContinuousContactBehavior_t](/docs/api/schemadefinitions/dynamiccontinuouscontactbehavior_t)

### Enabled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnBodyDesc_t.cs#L75)

```csharp
ref bool Enabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GameFlags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnBodyDesc_t.cs#L67)

```csharp
ref uint GameFlags { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GameIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnBodyDesc_t.cs#L65)

```csharp
ref uint GameIndex { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GameMass

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnBodyDesc_t.cs#L35)

```csharp
ref float GameMass { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Gravity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnBodyDesc_t.cs#L85)

```csharp
ref Vector Gravity { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### GravityScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnBodyDesc_t.cs#L59)

```csharp
ref float GravityScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### HasShadowController

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnBodyDesc_t.cs#L89)

```csharp
ref bool HasShadowController { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InertiaScaleInv

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnBodyDesc_t.cs#L39)

```csharp
ref float InertiaScaleInv { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### IsContinuousEnabled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnBodyDesc_t.cs#L79)

```csharp
ref bool IsContinuousEnabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LastAwakeForceAccum

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnBodyDesc_t.cs#L53)

```csharp
ref Vector LastAwakeForceAccum { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### LastAwakeTorqueAccum

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnBodyDesc_t.cs#L55)

```csharp
ref Vector LastAwakeTorqueAccum { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### LinearBuoyancyDrag

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnBodyDesc_t.cs#L49)

```csharp
ref float LinearBuoyancyDrag { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LinearDamping

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnBodyDesc_t.cs#L41)

```csharp
ref float LinearDamping { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LinearDrag

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnBodyDesc_t.cs#L45)

```csharp
ref float LinearDrag { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LinearVelocity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnBodyDesc_t.cs#L25)

```csharp
ref Vector LinearVelocity { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### LocalInertiaInv

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnBodyDesc_t.cs#L31)

```csharp
ISchemaFixedArray<Vector> LocalInertiaInv { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[Vector](/docs/api/natives/vector)>

### LocalMassCenter

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnBodyDesc_t.cs#L29)

```csharp
ref Vector LocalMassCenter { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### MassInv

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnBodyDesc_t.cs#L33)

```csharp
ref float MassInv { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MassPriority

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnBodyDesc_t.cs#L73)

```csharp
ref byte MassPriority { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### MassScaleInv

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnBodyDesc_t.cs#L37)

```csharp
ref float MassScaleInv { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MinPositionIterations

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnBodyDesc_t.cs#L71)

```csharp
ref byte MinPositionIterations { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### MinVelocityIterations

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnBodyDesc_t.cs#L69)

```csharp
ref byte MinVelocityIterations { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### Orientation

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnBodyDesc_t.cs#L23)

```csharp
SchemaUntypedField Orientation { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### Position

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnBodyDesc_t.cs#L20)

```csharp
ref Vector Position { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Sleeping

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnBodyDesc_t.cs#L77)

```csharp
ref bool Sleeping { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SpeculativeEnabled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnBodyDesc_t.cs#L87)

```csharp
ref bool SpeculativeEnabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TimeScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnBodyDesc_t.cs#L61)

```csharp
ref float TimeScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

