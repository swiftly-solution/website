---
title: CPulseCell_LerpCameraSettings__CursorState_t
---

# Interface CPulseCell_LerpCameraSettings__CursorState_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_LerpCameraSettings__CursorState_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CPulseCell_LerpCameraSettings__CursorState_t : CPulseCell_BaseLerp__CursorState_t, ISchemaClass<CPulseCell_BaseLerp__CursorState_t>, ISchemaClass<CPulseCell_LerpCameraSettings__CursorState_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CPulseCell_BaseLerp__CursorState_t](/docs/api/schemadefinitions/cpulsecell_baselerp__cursorstate_t)
- [ISchemaClass<CPulseCell_BaseLerp__CursorState_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPulseCell_LerpCameraSettings__CursorState_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Camera

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_LerpCameraSettings__CursorState_t.cs#L18)

```csharp
ref CHandle<CPointCamera> Camera { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CPointCamera](/docs/api/schemadefinitions/cpointcamera)>

### OverlaidEnd

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_LerpCameraSettings__CursorState_t.cs#L22)

```csharp
PointCameraSettings_t OverlaidEnd { get; }
```

#### Property Value

- [PointCameraSettings_t](/docs/api/schemadefinitions/pointcamerasettings_t)

### OverlaidStart

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_LerpCameraSettings__CursorState_t.cs#L20)

```csharp
PointCameraSettings_t OverlaidStart { get; }
```

#### Property Value

- [PointCameraSettings_t](/docs/api/schemadefinitions/pointcamerasettings_t)

