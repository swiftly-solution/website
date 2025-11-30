---
title: ViewAngleServerChange_t
---

# Interface ViewAngleServerChange_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ViewAngleServerChange_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface ViewAngleServerChange_t : ISchemaClass<ViewAngleServerChange_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<ViewAngleServerChange_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Angle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ViewAngleServerChange_t.cs#L20)

```csharp
ref QAngle Angle { get; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### Index

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ViewAngleServerChange_t.cs#L22)

```csharp
ref uint Index { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Type

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ViewAngleServerChange_t.cs#L18)

```csharp
ref FixAngleSet_t Type { get; }
```

#### Property Value

- [FixAngleSet_t](/docs/api/schemadefinitions/fixangleset_t)

## Methods

### AngleUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ViewAngleServerChange_t.cs#L25)

```csharp
void AngleUpdated()
```

### IndexUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ViewAngleServerChange_t.cs#L26)

```csharp
void IndexUpdated()
```

### TypeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ViewAngleServerChange_t.cs#L24)

```csharp
void TypeUpdated()
```

