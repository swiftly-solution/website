---
title: ViewAngleServerChange_t
---

```csharp
public interface ViewAngleServerChange_t : ISchemaClass<ViewAngleServerChange_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Angle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ViewAngleServerChange_t.cs#L19)

```csharp
ref QAngle Angle { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### Index

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ViewAngleServerChange_t.cs#L21)

```csharp
ref uint Index { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Type

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ViewAngleServerChange_t.cs#L17)

```csharp
ref FixAngleSet_t Type { get; }
```

#### Property Value

- [FixAngleSet_t](/docs/api/shared/schemadefinitions/fixangleset_t)

## Methods

### AngleUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ViewAngleServerChange_t.cs#L24)

```csharp
void AngleUpdated()
```

### IndexUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ViewAngleServerChange_t.cs#L25)

```csharp
void IndexUpdated()
```

### TypeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ViewAngleServerChange_t.cs#L23)

```csharp
void TypeUpdated()
```

