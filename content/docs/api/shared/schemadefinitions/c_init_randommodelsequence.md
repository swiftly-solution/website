---
title: C_INIT_RandomModelSequence
---

```csharp
public interface C_INIT_RandomModelSequence : CParticleFunctionInitializer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionInitializer>, ISchemaClass<C_INIT_RandomModelSequence>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**ActivityName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_RandomModelSequence.cs#L16)

```csharp
ISchemaFixedString ActivityName { get; }
```

#### Property Value

- [ISchemaFixedString](/docs/api/shared/schemas/ischemafixedstring)

**Model** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_RandomModelSequence.cs#L20)

```csharp
ref CStrongHandle<InfoForResourceTypeCModel> Model { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCModel](/docs/api/shared/schemadefinitions/infoforresourcetypecmodel)>

**SequenceName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_RandomModelSequence.cs#L18)

```csharp
ISchemaFixedString SequenceName { get; }
```

#### Property Value

- [ISchemaFixedString](/docs/api/shared/schemas/ischemafixedstring)

