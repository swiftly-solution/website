---
title: CNmFootstepEventPercentageThroughNode__CDefinition
---

```csharp
public interface CNmFootstepEventPercentageThroughNode__CDefinition : CNmFloatValueNode__CDefinition, CNmValueNode__CDefinition, CNmGraphNode__CDefinition, ISchemaClass<CNmGraphNode__CDefinition>, ISchemaClass<CNmValueNode__CDefinition>, ISchemaClass<CNmFloatValueNode__CDefinition>, ISchemaClass<CNmFootstepEventPercentageThroughNode__CDefinition>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### EventConditionRules

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmFootstepEventPercentageThroughNode__CDefinition.cs#L21)

```csharp
CNmBitFlags EventConditionRules { get; }
```

#### Property Value

- [CNmBitFlags](/docs/api/shared/schemadefinitions/cnmbitflags)

### PhaseCondition

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmFootstepEventPercentageThroughNode__CDefinition.cs#L19)

```csharp
ref NmFootPhaseCondition_t PhaseCondition { get; }
```

#### Property Value

- [NmFootPhaseCondition_t](/docs/api/shared/schemadefinitions/nmfootphasecondition_t)

### SourceStateNodeIdx

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmFootstepEventPercentageThroughNode__CDefinition.cs#L17)

```csharp
ref short SourceStateNodeIdx { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

