---
title: CBodyComponentBaseAnimGraph
---

# Interface CBodyComponentBaseAnimGraph

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBodyComponentBaseAnimGraph.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CBodyComponentBaseAnimGraph : CBodyComponentSkeletonInstance, CBodyComponent, CEntityComponent, ISchemaClass<CEntityComponent>, ISchemaClass<CBodyComponent>, ISchemaClass<CBodyComponentSkeletonInstance>, ISchemaClass<CBodyComponentBaseAnimGraph>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBodyComponentSkeletonInstance](/docs/api/schemadefinitions/cbodycomponentskeletoninstance)
- [CBodyComponent](/docs/api/schemadefinitions/cbodycomponent)
- [CEntityComponent](/docs/api/schemadefinitions/centitycomponent)
- [ISchemaClass<CEntityComponent>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBodyComponent>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBodyComponentSkeletonInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBodyComponentBaseAnimGraph>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AnimationController

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBodyComponentBaseAnimGraph.cs#L18)

```csharp
CBaseAnimGraphController AnimationController { get; }
```

#### Property Value

- [CBaseAnimGraphController](/docs/api/schemadefinitions/cbaseanimgraphcontroller)

## Methods

### AnimationControllerUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBodyComponentBaseAnimGraph.cs#L20)

```csharp
void AnimationControllerUpdated()
```

