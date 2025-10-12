---
title: C_OP_BasicMovement
---

```csharp
public interface C_OP_BasicMovement : CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<C_OP_BasicMovement>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **Drag** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_BasicMovement.cs#L18)

```csharp
CParticleCollectionFloatInput Drag { get; }
```

- Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

### **Gravity** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_BasicMovement.cs#L16)

```csharp
CParticleCollectionVecInput Gravity { get; }
```

- Property Value

- [CParticleCollectionVecInput](/docs/api/shared/schemadefinitions/cparticlecollectionvecinput)

### **MassControls** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_BasicMovement.cs#L20)

```csharp
CParticleMassCalculationParameters MassControls { get; }
```

- Property Value

- [CParticleMassCalculationParameters](/docs/api/shared/schemadefinitions/cparticlemasscalculationparameters)

### **MaxConstraintPasses** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_BasicMovement.cs#L22)

```csharp
ref int MaxConstraintPasses { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **UseNewCode** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_BasicMovement.cs#L24)

```csharp
ref bool UseNewCode { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

