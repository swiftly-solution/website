---
title: C_OP_AttractToControlPoint
---

```csharp
public interface C_OP_AttractToControlPoint : CParticleFunctionForce, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionForce>, ISchemaClass<C_OP_AttractToControlPoint>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **ApplyMinForce** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_AttractToControlPoint.cs#L26)

```csharp
ref bool ApplyMinForce { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **ComponentScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_AttractToControlPoint.cs#L16)

```csharp
ref Vector ComponentScale { get; }
```

- Property Value

- [Vector](/docs/api/shared/natives/vector)

### **FalloffPower** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_AttractToControlPoint.cs#L20)

```csharp
ref float FalloffPower { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **ForceAmount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_AttractToControlPoint.cs#L18)

```csharp
CPerParticleFloatInput ForceAmount { get; }
```

- Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### **ForceAmountMin** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_AttractToControlPoint.cs#L24)

```csharp
CPerParticleFloatInput ForceAmountMin { get; }
```

- Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### **TransformInput** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_AttractToControlPoint.cs#L22)

```csharp
CParticleTransformInput TransformInput { get; }
```

- Property Value

- [CParticleTransformInput](/docs/api/shared/schemadefinitions/cparticletransforminput)

