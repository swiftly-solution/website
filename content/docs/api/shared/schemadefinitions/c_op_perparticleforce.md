---
title: C_OP_PerParticleForce
---

```csharp
public interface C_OP_PerParticleForce : CParticleFunctionForce, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionForce>, ISchemaClass<C_OP_PerParticleForce>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **CP** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_PerParticleForce.cs#L20)

```csharp
ref int CP { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **Force** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_PerParticleForce.cs#L18)

```csharp
CPerParticleVecInput Force { get; }
```

- Property Value

- [CPerParticleVecInput](/docs/api/shared/schemadefinitions/cperparticlevecinput)

### **ForceScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_PerParticleForce.cs#L16)

```csharp
CPerParticleFloatInput ForceScale { get; }
```

- Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

