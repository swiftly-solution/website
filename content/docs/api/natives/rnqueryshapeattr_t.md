---
title: RnQueryShapeAttr_t
---

# Struct RnQueryShapeAttr_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/RnQueryShapeAttr_t.cs#L204)

**Namespace**: [SwiftlyS2.Shared.Natives](/docs/api/natives)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public struct RnQueryShapeAttr_t
```

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### CollisionGroup

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/RnQueryShapeAttr_t.cs#L214)

```csharp
public CollisionGroup CollisionGroup
```

#### Field Value

- [CollisionGroup](/docs/api/natives/collisiongroup)

### EntityIdsToIgnore

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/RnQueryShapeAttr_t.cs#L210)

```csharp
public uint* EntityIdsToIgnore
```

#### Field Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)*

### HierarchyIds

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/RnQueryShapeAttr_t.cs#L212)

```csharp
public ushort* HierarchyIds
```

#### Field Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)*

### InteractsAs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/RnQueryShapeAttr_t.cs#L209)

```csharp
public MaskTrace InteractsAs
```

#### Field Value

- [MaskTrace](/docs/api/natives/masktrace)

### InteractsExclude

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/RnQueryShapeAttr_t.cs#L208)

```csharp
public MaskTrace InteractsExclude
```

#### Field Value

- [MaskTrace](/docs/api/natives/masktrace)

### InteractsWith

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/RnQueryShapeAttr_t.cs#L207)

```csharp
public MaskTrace InteractsWith
```

#### Field Value

- [MaskTrace](/docs/api/natives/masktrace)

### ObjectSetMask

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/RnQueryShapeAttr_t.cs#L213)

```csharp
public RnQueryObjectSet ObjectSetMask
```

#### Field Value

- [RnQueryObjectSet](/docs/api/natives/rnqueryobjectset)

### OwnerIdsToIgnore

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/RnQueryShapeAttr_t.cs#L211)

```csharp
public uint* OwnerIdsToIgnore
```

#### Field Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)*

## Properties

### ForceHitEverything

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/RnQueryShapeAttr_t.cs#L242)

```csharp
public bool ForceHitEverything { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HitSolid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/RnQueryShapeAttr_t.cs#L217)

```csharp
public bool HitSolid { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HitSolidRequiresGenerateContacts

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/RnQueryShapeAttr_t.cs#L222)

```csharp
public bool HitSolidRequiresGenerateContacts { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HitTrigger

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/RnQueryShapeAttr_t.cs#L227)

```csharp
public bool HitTrigger { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IgnoreIfBothInteractWithHitboxes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/RnQueryShapeAttr_t.cs#L237)

```csharp
public bool IgnoreIfBothInteractWithHitboxes { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ShouldIgnoreDisabledPairs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/RnQueryShapeAttr_t.cs#L232)

```csharp
public bool ShouldIgnoreDisabledPairs { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Unknown

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/RnQueryShapeAttr_t.cs#L247)

```csharp
public bool Unknown { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

