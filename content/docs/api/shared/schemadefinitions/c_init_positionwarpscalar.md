---
title: C_INIT_PositionWarpScalar
---

```csharp
public interface C_INIT_PositionWarpScalar : CParticleFunctionInitializer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionInitializer>, ISchemaClass<C_INIT_PositionWarpScalar>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **ControlPointNumber** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionWarpScalar.cs#L26)

```csharp
ref int ControlPointNumber { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **InputValue** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionWarpScalar.cs#L20)

```csharp
CPerParticleFloatInput InputValue { get; }
```

- Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### **PrevPosScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionWarpScalar.cs#L22)

```csharp
ref float PrevPosScale { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **ScaleControlPointNumber** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionWarpScalar.cs#L24)

```csharp
ref int ScaleControlPointNumber { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **WarpMax** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionWarpScalar.cs#L18)

```csharp
ref Vector WarpMax { get; }
```

- Property Value

- [Vector](/docs/api/shared/natives/vector)

### **WarpMin** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionWarpScalar.cs#L16)

```csharp
ref Vector WarpMin { get; }
```

- Property Value

- [Vector](/docs/api/shared/natives/vector)

