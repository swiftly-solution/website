---
title: ITraceManager
---

# Interface ITraceManager

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Engine/ITraceManager.cs#L6)

**Namespace**: [SwiftlyS2.Shared.Services](/docs/api/services)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface ITraceManager
```

## Methods

### SimpleTrace(Vector, Vector, RayType_t, RnQueryObjectSet, MaskTrace, MaskTrace, MaskTrace, CollisionGroup, ref CGameTrace, CBaseEntity?, CBaseEntity?)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Engine/ITraceManager.cs#L48)

Performs a simple trace shape operation from the specified start point to the end point, using the provided
object query and trace mask. The result of the trace is stored in the provided trace object.

```csharp
void SimpleTrace(Vector start, Vector end, RayType_t rayKind, RnQueryObjectSet objectQuery, MaskTrace interactWith, MaskTrace interactExclude, MaskTrace interactAs, CollisionGroup collision, ref CGameTrace trace, CBaseEntity? filterEntity = null, CBaseEntity? filterSecondEntity = null)
```

#### Parameters

- **start**: [Vector](/docs/api/natives/vector) - The starting position of the trace, represented as a vector.
- **end**: [Vector](/docs/api/natives/vector) - The ending position of the trace, represented as a vector.
- **rayKind**: [RayType_t](/docs/api/natives/raytype_t) - The type of ray used for the trace.
- **objectQuery**: [RnQueryObjectSet](/docs/api/natives/rnqueryobjectset) - The object query specifying which objects to consider during the trace.
- **interactWith**: [MaskTrace](/docs/api/natives/masktrace) - The interaction layer defining the types of surfaces or entities to include in the trace.
- **interactExclude**: [MaskTrace](/docs/api/natives/masktrace) - The interaction layer defining the types of surfaces or entities to exclude from the trace.
- **interactAs**: [MaskTrace](/docs/api/natives/masktrace) - The interaction layer defining the types of surfaces or entities to interact as during the trace.
- **collision**: [CollisionGroup](/docs/api/natives/collisiongroup) - The collision group defining the collision behavior during the trace.
- **trace**: [CGameTrace](/docs/api/natives/cgametrace) - A reference to a CGameTrace structure that receives the results of the trace, including hit information and
    surface details.
- **filterEntity**: [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)? - An optional entity to exclude from the trace.
- **filterSecondEntity**: [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)? - An optional second entity to exclude from the trace.

### SimpleTrace(Vector, QAngle, RayType_t, RnQueryObjectSet, MaskTrace, MaskTrace, MaskTrace, CollisionGroup, ref CGameTrace, CBaseEntity?, CBaseEntity?)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Engine/ITraceManager.cs#L66)

Performs a simple trace shape operation from the specified start point in the direction defined by the given angle,
using the provided object query and trace mask. The result of the trace is stored in the provided trace object.

```csharp
void SimpleTrace(Vector start, QAngle angle, RayType_t rayKind, RnQueryObjectSet objectQuery, MaskTrace interactWith, MaskTrace interactExclude, MaskTrace interactAs, CollisionGroup collision, ref CGameTrace trace, CBaseEntity? filterEntity = null, CBaseEntity? filterSecondEntity = null)
```

#### Parameters

- **start**: [Vector](/docs/api/natives/vector) - The starting position of the trace, represented as a vector.
- **angle**: [QAngle](/docs/api/natives/qangle) - The direction of the trace, represented as a QAngle.
- **rayKind**: [RayType_t](/docs/api/natives/raytype_t) - The type of ray used for the trace.
- **objectQuery**: [RnQueryObjectSet](/docs/api/natives/rnqueryobjectset) - The object query specifying which objects to consider during the trace.
- **interactWith**: [MaskTrace](/docs/api/natives/masktrace) - The interaction layer defining the types of surfaces or entities to include in the trace.
- **interactExclude**: [MaskTrace](/docs/api/natives/masktrace) - The interaction layer defining the types of surfaces or entities to exclude from the trace.
- **interactAs**: [MaskTrace](/docs/api/natives/masktrace) - The interaction layer defining the types of surfaces or entities to interact as during the trace.
- **collision**: [CollisionGroup](/docs/api/natives/collisiongroup) - The collision group defining the collision behavior during the trace.
- **trace**: [CGameTrace](/docs/api/natives/cgametrace) - A reference to a CGameTrace structure that receives the results of the trace, including hit information and
    surface details.
- **filterEntity**: [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)? - An optional entity to exclude from the trace.
- **filterSecondEntity**: [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)? - An optional second entity to exclude from the trace.

### TracePlayerBBox(Vector, Vector, BBox_t, CTraceFilter, ref CGameTrace)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Engine/ITraceManager.cs#L19)

Performs a collision trace of a player-sized bounding box from the specified start position to the end position,
using the given filter and bounding box dimensions. The result of the trace is stored in the provided trace
object.

```csharp
void TracePlayerBBox(Vector start, Vector end, BBox_t bounds, CTraceFilter filter, ref CGameTrace trace)
```

#### Parameters

- **start**: [Vector](/docs/api/natives/vector) - The starting position of the trace, typically representing the player's initial location.
- **end**: [Vector](/docs/api/natives/vector) - The ending position of the trace, representing the target location for the bounding box movement.
- **bounds**: [BBox_t](/docs/api/natives/bbox_t) - The dimensions of the player's bounding box to be traced.
- **filter**: [CTraceFilter](/docs/api/natives/ctracefilter) - The trace filter used to determine which entities or surfaces are considered during the trace operation.
- **trace**: [CGameTrace](/docs/api/natives/cgametrace) - A reference to a CGameTrace object that receives the results of the trace, including collision information and
    hit details.

### TraceShape(Vector, Vector, Ray_t, CTraceFilter, ref CGameTrace)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Engine/ITraceManager.cs#L30)

Performs a trace operation from the specified start point to the end point using the given ray and filter, and
populates the trace result with collision information.

```csharp
void TraceShape(Vector start, Vector end, Ray_t ray, CTraceFilter filter, ref CGameTrace trace)
```

#### Parameters

- **start**: [Vector](/docs/api/natives/vector) - The starting position of the trace, represented as a vector.
- **end**: [Vector](/docs/api/natives/vector) - The ending position of the trace, represented as a vector.
- **ray**: [Ray_t](/docs/api/natives/ray_t) - The ray definition used for the trace, specifying direction and other ray properties.
- **filter**: [CTraceFilter](/docs/api/natives/ctracefilter) - The filter that determines which entities or surfaces are considered during the trace.
- **trace**: [CGameTrace](/docs/api/natives/cgametrace) - A reference to a CGameTrace structure that receives the results of the trace, including hit information and
    surface details.

