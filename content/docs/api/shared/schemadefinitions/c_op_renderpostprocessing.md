---
title: C_OP_RenderPostProcessing
---

```csharp
public interface C_OP_RenderPostProcessing : CParticleFunctionRenderer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionRenderer>, ISchemaClass<C_OP_RenderPostProcessing>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **PostProcessStrength** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderPostProcessing.cs#L16)

```csharp
CPerParticleFloatInput PostProcessStrength { get; }
```

- Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### **PostTexture** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderPostProcessing.cs#L18)

```csharp
ref CStrongHandle<InfoForResourceTypeCPostProcessingResource> PostTexture { get; }
```

- Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCPostProcessingResource](/docs/api/shared/schemadefinitions/infoforresourcetypecpostprocessingresource)>

### **Priority** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderPostProcessing.cs#L20)

```csharp
ref ParticlePostProcessPriorityGroup_t Priority { get; }
```

- Property Value

- [ParticlePostProcessPriorityGroup_t](/docs/api/shared/schemadefinitions/particlepostprocessprioritygroup_t)

