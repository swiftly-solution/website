---
title: CBuoyancyHelper
---

# Interface CBuoyancyHelper

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBuoyancyHelper.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CBuoyancyHelper : ISchemaClass<CBuoyancyHelper>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CBuoyancyHelper>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### FluidDensity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBuoyancyHelper.cs#L20)

```csharp
ref float FluidDensity { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FluidType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBuoyancyHelper.cs#L18)

```csharp
ref CUtlStringToken FluidType { get; }
```

#### Property Value

- [CUtlStringToken](/docs/api/natives/cutlstringtoken)

### FractionOfWheelSubmergedForWheelDrag

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBuoyancyHelper.cs#L34)

```csharp
ref CUtlVector<float> FractionOfWheelSubmergedForWheelDrag { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### FractionOfWheelSubmergedForWheelFriction

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBuoyancyHelper.cs#L30)

```csharp
ref CUtlVector<float> FractionOfWheelSubmergedForWheelFriction { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### NeutrallyBuoyant

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBuoyancyHelper.cs#L28)

```csharp
ref bool NeutrallyBuoyant { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NeutrallyBuoyantAngularDamping

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBuoyancyHelper.cs#L26)

```csharp
ref float NeutrallyBuoyantAngularDamping { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### NeutrallyBuoyantGravity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBuoyancyHelper.cs#L22)

```csharp
ref float NeutrallyBuoyantGravity { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### NeutrallyBuoyantLinearDamping

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBuoyancyHelper.cs#L24)

```csharp
ref float NeutrallyBuoyantLinearDamping { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### WheelDrag

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBuoyancyHelper.cs#L36)

```csharp
ref CUtlVector<float> WheelDrag { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### WheelFrictionScales

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBuoyancyHelper.cs#L32)

```csharp
ref CUtlVector<float> WheelFrictionScales { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

