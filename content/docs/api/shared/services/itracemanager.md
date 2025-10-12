---
title: ITraceManager
---

```csharp
public interface ITraceManager
```

## Methods

### TracePlayerBBox(Vector, Vector, BBox_t, CTraceFilter, ref CGameTrace)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Engine/ITraceManager.cs#L18)

```csharp
void TracePlayerBBox(Vector start, Vector end, BBox_t bounds, CTraceFilter filter, ref CGameTrace trace)
```

#### Parameters

- **start**: [Vector](/docs/api/shared/natives/vector) - The starting position of the trace, typically representing the player's initial location.
- **end**: [Vector](/docs/api/shared/natives/vector) - The ending position of the trace, representing the target location for the bounding box movement.
- **bounds**: [BBox_t](/docs/api/shared/natives/bbox_t) - The dimensions of the player's bounding box to be traced.
- **filter**: [CTraceFilter](/docs/api/shared/natives/ctracefilter) - The trace filter used to determine which entities or surfaces are considered during the trace operation.
- **trace**: [CGameTrace](/docs/api/shared/natives/cgametrace) - A reference to a CGameTrace object that receives the results of the trace, including collision information and
    hit details.

### TraceShape(Vector, Vector, Ray_t, CTraceFilter, ref CGameTrace)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Engine/ITraceManager.cs#L29)

```csharp
void TraceShape(Vector start, Vector end, Ray_t ray, CTraceFilter filter, ref CGameTrace trace)
```

#### Parameters

- **start**: [Vector](/docs/api/shared/natives/vector) - The starting position of the trace, represented as a vector.
- **end**: [Vector](/docs/api/shared/natives/vector) - The ending position of the trace, represented as a vector.
- **ray**: [Ray_t](/docs/api/shared/natives/ray_t) - The ray definition used for the trace, specifying direction and other ray properties.
- **filter**: [CTraceFilter](/docs/api/shared/natives/ctracefilter) - The filter that determines which entities or surfaces are considered during the trace.
- **trace**: [CGameTrace](/docs/api/shared/natives/cgametrace) - A reference to a CGameTrace structure that receives the results of the trace, including hit information and
    surface details.

