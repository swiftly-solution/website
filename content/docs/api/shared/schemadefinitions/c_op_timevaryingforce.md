---
title: C_OP_TimeVaryingForce
---

```csharp
public interface C_OP_TimeVaryingForce : CParticleFunctionForce, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionForce>, ISchemaClass<C_OP_TimeVaryingForce>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **EndLerpTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_TimeVaryingForce.cs#L20)

```csharp
ref float EndLerpTime { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **EndingForce** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_TimeVaryingForce.cs#L22)

```csharp
ref Vector EndingForce { get; }
```

- Property Value

- [Vector](/docs/api/shared/natives/vector)

### **StartLerpTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_TimeVaryingForce.cs#L16)

```csharp
ref float StartLerpTime { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **StartingForce** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_TimeVaryingForce.cs#L18)

```csharp
ref Vector StartingForce { get; }
```

- Property Value

- [Vector](/docs/api/shared/natives/vector)

