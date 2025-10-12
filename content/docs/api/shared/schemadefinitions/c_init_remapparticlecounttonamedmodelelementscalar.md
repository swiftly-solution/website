---
title: C_INIT_RemapParticleCountToNamedModelElementScalar
---

```csharp
public interface C_INIT_RemapParticleCountToNamedModelElementScalar : C_INIT_RemapParticleCountToScalar, CParticleFunctionInitializer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionInitializer>, ISchemaClass<C_INIT_RemapParticleCountToScalar>, ISchemaClass<C_INIT_RemapParticleCountToNamedModelElementScalar>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Model

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_RemapParticleCountToNamedModelElementScalar.cs#L16)

```csharp
ref CStrongHandle<InfoForResourceTypeCModel> Model { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCModel](/docs/api/shared/schemadefinitions/infoforresourcetypecmodel)>

### ModelFromRenderer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_RemapParticleCountToNamedModelElementScalar.cs#L22)

```csharp
ref bool ModelFromRenderer { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OutputMaxName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_RemapParticleCountToNamedModelElementScalar.cs#L20)

```csharp
string OutputMaxName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### OutputMinName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_RemapParticleCountToNamedModelElementScalar.cs#L18)

```csharp
string OutputMinName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

