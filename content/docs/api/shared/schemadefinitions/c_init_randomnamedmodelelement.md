---
title: C_INIT_RandomNamedModelElement
---

```csharp
public interface C_INIT_RandomNamedModelElement : CParticleFunctionInitializer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionInitializer>, ISchemaClass<C_INIT_RandomNamedModelElement>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### FieldOutput

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_RandomNamedModelElement.cs#L28)

```csharp
ParticleAttributeIndex_t FieldOutput { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### Linear

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_RandomNamedModelElement.cs#L24)

```csharp
ref bool Linear { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Model

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_RandomNamedModelElement.cs#L18)

```csharp
ref CStrongHandle<InfoForResourceTypeCModel> Model { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCModel](/docs/api/shared/schemadefinitions/infoforresourcetypecmodel)>

### ModelFromRenderer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_RandomNamedModelElement.cs#L26)

```csharp
ref bool ModelFromRenderer { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Names

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_RandomNamedModelElement.cs#L20)

```csharp
ref CUtlVector<CUtlString> Names { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CUtlString](/docs/api/shared/natives/cutlstring)>

### Shuffle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_RandomNamedModelElement.cs#L22)

```csharp
ref bool Shuffle { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

