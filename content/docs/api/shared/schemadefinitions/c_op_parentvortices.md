---
title: C_OP_ParentVortices
---

```csharp
public interface C_OP_ParentVortices : CParticleFunctionForce, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionForce>, ISchemaClass<C_OP_ParentVortices>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### FlipBasedOnYaw

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ParentVortices.cs#L22)

```csharp
ref bool FlipBasedOnYaw { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ForceScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ParentVortices.cs#L18)

```csharp
ref float ForceScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TwistAxis

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ParentVortices.cs#L20)

```csharp
ref Vector TwistAxis { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

